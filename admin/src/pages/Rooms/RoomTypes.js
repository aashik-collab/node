import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../../utils/Spinner';
import getAdminToken from '../../utils/getAdminToken';
import removeAdminToken from '../../utils/removeAdminToken';
import { withRouter } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateRoomTypes(props) {
    const [roomType, setRoomType] = useState('');

    const [fetchRoomTypesLoader, setFetchRoomTypesLoader] = useState(null);
    const [roomTypesArr, setRoomTypesArr] = useState([]);

    const [submitLoader, setSubmitLoader] = useState(null);
    const [errMsg, setErrMsg] = useState(null);

    useEffect(() => {
        fetchRoomTypes();
        return () => {};
    }, []);

    const fetchRoomTypes = () => {
        setFetchRoomTypesLoader(true);
        setRoomTypesArr([]);
        axios
            .get('/api/rooms/room-types/view-room-types')
            .then((res) => {
                setFetchRoomTypesLoader(null);
                console.log(res);
                if (res.data.success) {
                    setRoomTypesArr(res.data.roomTypes);
                }
            })
            .catch((err) => {
                setFetchRoomTypesLoader(null);
                console.log(err);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (roomType.length < 2) {
            setErrMsg('room type must be greater than 2 characters');
            return;
        }
        const formData = new FormData();
        formData.append('room_type', roomType);
        setSubmitLoader(true);
        axios
            .post('/api/rooms/room-types/create', formData, {
                headers: {
                    Authorization: getAdminToken(),
                },
            })
            .then((res) => {
                console.log(res);
                setSubmitLoader(null);
                if (res.data.success) {
                    setRoomType('');
                    fetchRoomTypes();
                    toast.success('room type created');
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

    const handleRoomTypeDelete = (room_type_id) => {
        axios
            .delete('/api/rooms/room-types/delete-room-type/' + room_type_id, {
                headers: {
                    Authorization: getAdminToken(),
                },
            })
            .then((res) => {
                console.log(res);
                if (res.data.success) {
                    fetchRoomTypes();
                    toast.error('room type deleted', {
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
                        <h4 className="lead mb-3">Create Room Type</h4>
                        <form
                            onSubmit={(e) => {
                                handleSubmit(e);
                            }}
                        >
                            {errMsg && <div className="alert alert-danger small">{errMsg}</div>}
                            <div className="my-2">
                                <label htmlFor="room-type">Room Type</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="room-type"
                                    value={roomType}
                                    onChange={(e) => {
                                        setRoomType(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="my-2">
                                <button className="btn btn-primary" disabled={submitLoader ? true : false}>
                                    {!submitLoader && <span>create room type</span>}
                                    {!!submitLoader && <span>creating...</span>}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-12 col-md-4 py-4">
                    <div className="bg-light border shadow-sm p-3 rounded">
                        <h4 className="lead ">Other Room Types</h4>
                        {roomTypesArr.length &&
                            roomTypesArr.map((type) => {
                                return (
                                    <div
                                        key={type._id}
                                        className="text-muted my-3 d-flex align0items-center justify-content-between"
                                    >
                                        <strong>{type.room_type}</strong>
                                        <span
                                            onClick={() => {
                                                handleRoomTypeDelete(type._id);
                                            }}
                                            className="material-icons"
                                            style={{ cursor: 'pointer' }}
                                        >
                                            delete
                                        </span>
                                    </div>
                                );
                            })}
                        {!!fetchRoomTypesLoader && <Spinner />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default withRouter(CreateRoomTypes);
