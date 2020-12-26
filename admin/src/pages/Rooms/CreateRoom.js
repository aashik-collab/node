import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import TextAreaAutoSize from 'react-textarea-autosize';
import Switch from 'react-switch';
import { withRouter } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import getAdminToken from '../../utils/getAdminToken';

function CreateRoom(props) {
    const [roomTypesOptions, setRoomTypes] = useState([]);
    const [roomCategoriesOptions, setRoomCategories] = useState([]);
    const [selectedType, setSelectedType] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const [typeCatFetched, setTypeCatFetched] = useState(null);

    const [availableChecked, setAvailableChecked] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [noOfPeople, setNoOfPeople] = useState(0);

    const [createLoader, setCreateLoader] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedCategory || !selectedType) {
            toast.error('category or type not selected', {
                autoClose: 3000,
            });
            return;
        }
        if (!title.length || !description.length || !image.length) {
            toast.error('all fields are required', {
                autoClose: 4000,
            });
            return;
        }
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('room_image', image);
        formData.append('price', price);
        formData.append('room_category_id', selectedCategory._id);
        formData.append('room_type_id', selectedType._id);
        formData.append('availability', availableChecked);

        setCreateLoader(true);
        axios
            .post('/api/rooms/create-room/', formData, {
                headers: {
                    Authorization: getAdminToken(),
                },
            })
            .then((res) => {
                console.log(res);
                setCreateLoader(null);
                if (res.data.success) {
                    toast.success('Room created');
                }
            })
            .catch((err) => {
                setCreateLoader(null);
                console.log(err.response);
                if (err.response) {
                    if (err.response.status === 401) {
                        props.history.push('/admin');
                        return;
                    }
                    toast.error(err.response.data.message, {
                        autoClose: 4000,
                    });
                }
            });
    };

    useEffect(() => {
        setTypeCatFetched(null);
        axios
            .get('/api/rooms/room-types/view-room-types')
            .then((res) => {
                console.log(res);
                setTypeCatFetched(true);
                if (res.data.success) {
                    setRoomTypes(
                        res.data.roomTypes.map((type) => {
                            return {
                                _id: type._id,
                                label: type.room_type,
                                value: type.room_type,
                            };
                        })
                    );
                }
            })
            .catch((err) => {
                setTypeCatFetched(true);
                console.log(err);
            });

        axios
            .get('/api/rooms/room-categories/view-room-categories')
            .then((res) => {
                console.log(res);
                setTypeCatFetched(true);
                if (res.data.success) {
                    setRoomCategories(
                        res.data.roomCategories.map((category) => {
                            return {
                                _id: category._id,
                                label: category.room_category,
                                value: category.room_category,
                            };
                        })
                    );
                }
            })
            .catch((err) => {
                setTypeCatFetched(true);
                console.log(err);
                if (err.response) {
                    toast.error(err.response.data.message, {
                        autoClose: 3000,
                    });
                }
            });
        return () => {};
    }, []);

    return (
        <div>
            <ToastContainer />
            <h1 className="display-4 m-2 text-center text-muted">Create Room</h1>
            <div className="py-2 mt-2 mb-5">
                <form
                    onSubmit={(e) => {
                        handleSubmit(e);
                    }}
                    className="form-container border rounded shadow-sm bg-white"
                >
                    {!!typeCatFetched && (!roomTypesOptions.length || !roomCategoriesOptions.length) && (
                        <div className="alert alert-warning small text-center">
                            room types or categories are empty, please add them first
                        </div>
                    )}

                    <div className="my-2">
                        <label htmlFor="room-title">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                            className="form-control bg-light"
                            id="title"
                            required={true}
                        />
                    </div>
                    <div className="my-2">
                        <label htmlFor="category">Category</label>
                        <Select
                            id="category"
                            value={selectedCategory}
                            onChange={(selected) => {
                                setSelectedCategory(selected);
                            }}
                            options={roomCategoriesOptions}
                            required
                        />
                    </div>
                    <div className="my-2">
                        <label htmlFor="category">Type</label>
                        <Select
                            id="type"
                            value={selectedType}
                            onChange={(selected) => {
                                setSelectedType(selected);
                            }}
                            options={roomTypesOptions}
                            required
                        />
                    </div>
                    <div className="my-2">
                        <label htmlFor="description">Description</label>
                        <TextAreaAutoSize
                            minRows={3}
                            maxRows={10}
                            className="form-control bg-light"
                            id="description"
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}
                            required
                        />
                    </div>
                    <div className="my-2">
                        <label htmlFor="image">Image</label>
                        <TextAreaAutoSize
                            minRows={2}
                            maxRows={5}
                            className="form-control bg-light"
                            id="image"
                            value={image}
                            onChange={(e) => {
                                setImage(e.target.value);
                            }}
                            required
                        />
                    </div>
                    <div className="my-2">
                        <label htmlFor="num_of_people">No. of people</label>
                        <input
                            type="number"
                            id="num_of_people"
                            className="form-control bg-light"
                            value={noOfPeople}
                            onChange={(e) => {
                                setNoOfPeople(e.target.value);
                            }}
                            required
                        />
                    </div>
                    <div className="my-2">
                        <label htmlFor="price">Price</label>
                        <input
                            type="number"
                            className="form-control bg-light"
                            id="price"
                            value={price}
                            onChange={(e) => {
                                setPrice(e.target.value);
                            }}
                            required
                        />
                    </div>
                    <div className="my-2">
                        <label htmlFor="discount">Discount</label>
                        <input
                            type="number"
                            className="form-control bg-light"
                            id="discount"
                            value={discount}
                            onChange={(e) => {
                                setDiscount(e.target.value);
                            }}
                            required
                        />
                    </div>
                    <div className="my-2">
                        <label className="d-block">Availability</label>
                        <div className="d-flex align-items-center">
                            <Switch
                                checkedIcon={false}
                                uncheckedIcon={false}
                                onColor="#5bc42d"
                                offColor="#e33927"
                                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                height={20}
                                width={48}
                                checked={availableChecked}
                                onChange={(bool) => {
                                    setAvailableChecked(bool);
                                }}
                            />
                            <span className="small text-muted" style={{ marginLeft: 10 }}>
                                {availableChecked ? 'available' : 'unavailable'}
                            </span>
                        </div>
                    </div>
                    <div className="my-3">
                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={(e) => {
                                if (!createLoader) {
                                    handleSubmit(e);
                                }
                            }}
                            disabled={createLoader ? true : false}
                        >
                            {!createLoader && <span>Create room</span>}
                            {!!createLoader && <span>creating room...</span>}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default withRouter(CreateRoom);
