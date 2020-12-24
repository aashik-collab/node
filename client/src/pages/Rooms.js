import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import Card from '../components/Global/Card';
import '../styles/rooms.css';

function Rooms() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        axios
            .get('/api/rooms/fetch-all-rooms')
            .then((res) => {
                console.log(res);
                if (res.data.success) {
                    setRooms(res.data.rooms);
                }
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response);
            });
        return () => {};
    }, []);

    return (
        <div className="rooms-topmost-container p-4 d-flex">
            <div className="col-12 col-md-3 p-2 ">
                <div className="border rounded bg-light shadow-sm p-3" style={{ position: 'sticky', top: 80 }}>
                    <div className="mb-2">
                        <label htmlFor="select-room-category" className="m-0 small text-muted">
                            select room category
                        </label>
                        <Select id="select-room-category" className="" options={options} />
                    </div>
                    <div className="my-2">
                        <label htmlFor="select-room-type" className="m-0 small text-muted">
                            select room type
                        </label>
                        <Select id="select-room-type" className="" options={options} />
                    </div>
                    <div className="my-2">
                        <label htmlFor="select-people-number" className="m-0 small text-muted">
                            select number of people
                        </label>
                        <Select id="select-people-number" className="" options={options} />
                    </div>
                    <div className="mt-3 d-flex justify-content-end">
                        <button className="btn btn-sm  btn-success">filter</button>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-9 p-2 ">
                <div className="border rounded bg-white">
                    <section
                        className="rooms-breadcrum border-bottom p-2 shadow-sm bg-white"
                        style={{ position: 'sticky', top: 53 }}
                    >
                        <h6 className="d-flex align-items-center text-dark">
                            <span>Rooms</span> <i className="fas fa-angle-right mx-2"></i>
                            <span> Rooms category</span>
                            <i className="fas fa-angle-right mx-2"></i>
                            <span>Rooms types</span>
                        </h6>
                    </section>

                    <section className="d-flex flex-wrap justify-content-center">
                        {rooms.map((room) => {
                            return (
                                <div className="my-2">
                                    <Card type={'room'} item={room} />
                                </div>
                            );
                        })}
                        {!rooms.length && (
                            <div className="my-5 text-muted">
                                <h4>No rooms to show</h4>
                            </div>
                        )}
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Rooms;
