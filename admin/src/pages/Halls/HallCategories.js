import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../../utils/Spinner';
import getAdminToken from '../../utils/getAdminToken';
import removeAdminToken from '../../utils/removeAdminToken';
import { withRouter } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateHallCategories(props) {
    const [hallCategory, setHallCategory] = useState('');

    const [fetchHallCategoriesLoader, setFetchHallCategoriesLoader] = useState(null);
    const [hallCategoriesArr, setHallCategoriesArr] = useState([]);

    const [submitLoader, setSubmitLoader] = useState(null);
    const [errMsg, setErrMsg] = useState(null);

    useEffect(() => {
        fetchHallCategories();
        return () => {};
    }, []);

    const fetchHallCategories = () => {
        setFetchHallCategoriesLoader(true);
        setHallCategoriesArr([]);
        axios
            .get('/api/halls/hall-categories/view-hall-categories')
            .then((res) => {
                setFetchHallCategoriesLoader(null);
                console.log(res);
                if (res.data.success) {
                    setHallCategoriesArr(res.data.hallCategories);
                }
            })
            .catch((err) => {
                setFetchHallCategoriesLoader(null);
                console.log(err);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (hallCategory.length < 2) {
            setErrMsg('hall categories must be greater than 2 characters');
            return;
        }
        const formData = new FormData();
        formData.append('hall_category', hallCategory);
        setSubmitLoader(true);
        axios
            .post('/api/halls/hall-categories/create', formData, {
                headers: {
                    Authorization: getAdminToken(),
                },
            })
            .then((res) => {
                console.log(res);
                setSubmitLoader(null);
                if (res.data.success) {
                    setHallCategory('');
                    toast.success('hall category created');
                    fetchHallCategories();
                }
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response);
                setSubmitLoader(null);
                if (err.response) {
                    if (err.response.status === 401) {
                        removeAdminToken();
                        props.history.push('/admin');
                        return;
                    }
                    setErrMsg(err.response.data.message);
                }
            });
    };

    const handleHallCategoryDelete = (hall_category_id) => {
        axios
            .delete('/api/halls/hall-categories/delete-hall-category/' + hall_category_id, {
                headers: {
                    Authorization: getAdminToken(),
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.success) {
                    fetchHallCategories();
                    toast.error('hall category deleted', {
                        autoClose: 3000,
                    });
                }
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response);
                if (err.response) {
                    if (err.response.status === 401) {
                        removeAdminToken();
                        props.history.push('/admin');
                        return;
                    }
                    setErrMsg(err.response.data.message);
                }
            });
    };

    return (
        <>
            <ToastContainer />
            <div className="row p-4">
                <div className="col-12 col-md-8 py-4 px-2">
                    <div className="bg-light border shadow-sm px-3 py-2 rounded">
                        <h4 className="lead mb-3">Create Hall Category</h4>
                        <form
                            onSubmit={(e) => {
                                handleSubmit(e);
                            }}
                        >
                            {errMsg && <div className="alert alert-danger small">{errMsg}</div>}
                            <div className="my-2">
                                <label htmlFor="hall-category">Hall Category</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="hall-category"
                                    value={hallCategory}
                                    onChange={(e) => {
                                        setHallCategory(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="my-2">
                                <button className="btn btn-primary" disabled={submitLoader ? true : false}>
                                    {!submitLoader && <span>create hall category</span>}
                                    {!!submitLoader && <span>creating...</span>}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-12 col-md-4 py-4">
                    <div className="bg-light border shadow-sm p-3 rounded">
                        <h4 className="lead ">Other Hall Categories</h4>
                        {hallCategoriesArr.length &&
                            hallCategoriesArr.map((category) => {
                                return (
                                    <div
                                        key={category._id}
                                        className="text-muted my-3 d-flex align0items-center justify-content-between"
                                    >
                                        <strong>{category.hall_category}</strong>
                                        <span
                                            onClick={() => {
                                                handleHallCategoryDelete(category._id);
                                            }}
                                            className="material-icons"
                                            style={{ cursor: 'pointer' }}
                                        >
                                            delete
                                        </span>
                                    </div>
                                );
                            })}
                        {!!fetchHallCategoriesLoader && <Spinner />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default withRouter(CreateHallCategories);
