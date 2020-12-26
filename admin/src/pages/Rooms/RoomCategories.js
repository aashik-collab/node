import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../../utils/Spinner';
import getAdminToken from '../../utils/getAdminToken';
import removeAdminToken from '../../utils/removeAdminToken';
import { withRouter } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateRoomCategories(props) {
    const [roomCategory, setRoomCategory] = useState('');

    const [fetchRoomCategoriesLoader, setFetchRoomCategoriesLoader] = useState(null);
    const [roomCategoriesArr, setRoomCategoriesArr] = useState([]);

    const [submitLoader, setSubmitLoader] = useState(null);
    const [errMsg, setErrMsg] = useState(null);

    useEffect(() => {
        fetchRoomCategories();
        return () => {};
    }, []);

    const fetchRoomCategories = () => {
        setFetchRoomCategoriesLoader(true);
        setRoomCategoriesArr([]);
        axios
            .get('/api/rooms/room-categories/view-room-categories')
            .then((res) => {
                setFetchRoomCategoriesLoader(null);
                console.log(res);
                if (res.data.success) {
                    setRoomCategoriesArr(res.data.roomCategories);
                }
            })
            .catch((err) => {
                setFetchRoomCategoriesLoader(null);
                console.log(err);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (roomCategory.length < 2) {
            setErrMsg('room categories must be greater than 2 characters');
            return;
        }
        const formData = new FormData();
        formData.append('room_category', roomCategory);
        setSubmitLoader(true);
        axios
            .post('/api/rooms/room-categories/create', formData, {
                headers: {
                    Authorization: getAdminToken(),
                },
            })
            .then((res) => {
                console.log(res);
                setSubmitLoader(null);
                if (res.data.success) {
                    setRoomCategory('');
                    toast.success('room category created');
                    fetchRoomCategories();
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

    const handleRoomCategoryDelete = (room_category_id) => {
        axios
            .delete('/api/rooms/room-categories/delete-room-category/' + room_category_id, {
                headers: {
                    Authorization: getAdminToken(),
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.success) {
                    fetchRoomCategories();
                    toast.error('room category deleted', {
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
                        <h4 className="lead mb-3">Create Room Category</h4>
                        <form
                            onSubmit={(e) => {
                                handleSubmit(e);
                            }}
                        >
                            {errMsg && <div className="alert alert-danger small">{errMsg}</div>}
                            <div className="my-2">
                                <label htmlFor="room-category">Room Category</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="room-category"
                                    value={roomCategory}
                                    onChange={(e) => {
                                        setRoomCategory(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="my-2">
                                <button className="btn btn-primary" disabled={submitLoader ? true : false}>
                                    {!submitLoader && <span>create room category</span>}
                                    {!!submitLoader && <span>creating...</span>}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-12 col-md-4 py-4">
                    <div className="bg-light border shadow-sm p-3 rounded">
                        <h4 className="lead ">Other Room Categories</h4>
                        {roomCategoriesArr.length &&
                            roomCategoriesArr.map((category) => {
                                return (
                                    <div
                                        key={category._id}
                                        className="text-muted my-3 d-flex align0items-center justify-content-between"
                                    >
                                        <strong>{category.room_category}</strong>
                                        <span
                                            onClick={() => {
                                                handleRoomCategoryDelete(category._id);
                                            }}
                                            className="material-icons"
                                            style={{ cursor: 'pointer' }}
                                        >
                                            delete
                                        </span>
                                    </div>
                                );
                            })}
                        {!!fetchRoomCategoriesLoader && <Spinner />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default withRouter(CreateRoomCategories);
