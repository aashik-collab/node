import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardFixedSize from '../components/Global/CardFixedSize';
import WholeScreenLoader from '../utils/WholeScreenLoader';
import { getRooms, setRoomsArr } from '../states/roomPage';

function RoomsV2() {
    const [rooms, setRooms] = useState([]);

    const [wholeScreenLoader, setWholeScreenLoader] = useState(null);

    useEffect(() => {
        const roomsArr = getRooms();
        if (!roomsArr) {
            fetchRooms();
        }
        if (roomsArr) {
            setRooms(roomsArr);
        }

        return () => {};
    }, []);

    const fetchRooms = () => {
        setWholeScreenLoader(true);
        axios
            .get('/api/rooms/fetch-all-rooms')
            .then((res) => {
                // console.log(res);
                setWholeScreenLoader(null);
                if (res.data.success) {
                    setRooms(res.data.rooms);
                    setRoomsArr(res.data.rooms);
                }
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response);
                setWholeScreenLoader(null);
            });
    };

    return (
        <>
            {!!wholeScreenLoader && <WholeScreenLoader />}
            <div className="container">
                <div className="d-flex my-3 flex-wrap justify-content-center">
                    {rooms.map((room) => {
                        return (
                            <div key={room._id} className="m-3">
                                <CardFixedSize type={'room'} item={room} />
                            </div>
                        );
                    })}
                    {!rooms.length && (
                        <div className="mt-5">
                            <h4 className="text-muted">No rooms to show</h4>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default RoomsV2;
