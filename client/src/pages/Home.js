import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../styles/home.css';
import RoomForm from '../components/Home/RoomForm';
import HallForm from '../components/Home/HallForm';
import RoomsSlider from '../components/Home/RoomsSlider';
import HallsSlider from '../components/Home/HallsSlider';
import {
    getHallCategories,
    getHallsForSlider,
    getRoomCategories,
    getRoomsForSlider,
    getRoomTypes,
    setHallCategoriesArr,
    setHallsInSlider,
    setRoomCategoriesArr,
    setRoomsInSlider,
    setRoomTypesArr,
} from '../states/homePage';
import WholeScreenLoader from '../utils/WholeScreenLoader';
import CheckResults from '../components/Home/CheckResults';

function Home() {
    const [roomSelected, setRoomSelected] = useState(true);
    const [hallSelected, setHallSelected] = useState(null);

    const [roomsArr, setRoomsArr] = useState([]);
    const [hallsArr, setHallsArr] = useState([]);

    const [roomTypes, setRoomTypes] = useState([]);
    const [roomCategories, setRoomCategories] = useState([]);
    const [hallCategories, setHallCategories] = useState([]);
    const [noOfPeopleForRooms, setNoOfPeopleForRooms] = useState([]);
    const [noOfPeopleForHalls, setNoOfPeopleForHalls] = useState([]);

    const [selectedRoomCatHome, setSelectedRoomCatHome] = useState(null);
    const [selectedRoomTypeHome, setSelectedRoomTypeHome] = useState(null);
    const [selectedPeopleNumRoomHome, setSelectedPeopleNumRoomHome] = useState(null);

    const [selectedHallCatHome, setSelectedHallCatHome] = useState(null);
    const [selectedPeopleNumHallHome, setSelectedPeopleNumHallHome] = useState(null);

    const [checkAvailClicked, setCheckAvailClicked] = useState(null);
    const [checkAvailErrMsg, setCheckAvailErrMsg] = useState(null);
    const [checkAvailResultsRoom, setCheckAvailResultsRoom] = useState(null);
    const [checkAvailResultsHall, setCheckAvailResultsHall] = useState(null);

    const [addToCart_Id, setAddToCart_Id] = useState(null);

    const [wholeScreenLoader, setWholeScreenLoader] = useState(null);

    const selectRoom = () => {
        setRoomSelected(true);
        setHallSelected(null);
    };

    const selectHall = () => {
        setHallSelected(true);
        setRoomSelected(null);
    };

    useEffect(() => {
        const rooms = getRoomsForSlider();
        const halls = getHallsForSlider();
        if (rooms) {
            setRoomsArr(rooms);
        }
        if (!rooms) {
            fetchRooms();
        }
        if (halls) {
            setHallsArr(halls);
        }
        if (!halls) {
            fetchHalls();
        }
    }, []);

    useEffect(() => {
        const roomTypesArr = getRoomTypes();
        const roomCategoriesArr = getRoomCategories();
        const hallCategoriesArr = getHallCategories();

        if (!roomTypesArr) {
            fetchRoomTypes();
        } else if (roomTypesArr) {
            setRoomTypes(roomTypesArr);
        }

        if (!roomCategoriesArr) {
            fetchRoomCategories();
        } else if (roomCategoriesArr) {
            setRoomCategories(roomCategoriesArr);
        }

        if (!hallCategoriesArr) {
            fetchHallCategories();
        } else if (hallCategories) {
            setHallCategories(hallCategoriesArr);
        }

        fetchNoOfPeople();

        return () => {};
    }, []);

    const fetchRooms = () => {
        setWholeScreenLoader(true);
        axios
            .get('/api/rooms/fetch-some-rooms-for-homepage')
            .then((res) => {
                // console.log(res);
                setWholeScreenLoader(null);
                if (res.data.success) {
                    setRoomsInSlider(res.data.rooms);
                    setRoomsArr(res.data.rooms);
                }
            })
            .catch((err) => {
                console.log(err);
                setWholeScreenLoader(null);
            });
        return () => {};
    };

    const fetchHalls = () => {
        axios
            .get('/api/halls/fetch-some-halls-for-homepage')
            .then((res) => {
                // console.log(res);
                if (res.data.success) {
                    setHallsInSlider(res.data.halls);
                    setHallsArr(res.data.halls);
                }
            })
            .catch((err) => {
                console.log(err);
            });
        return () => {};
    };

    const fetchRoomCategories = () => {
        axios
            .get('/api/rooms/room-categories/view-room-categories')
            .then((res) => {
                // console.log('room categories', res);

                let arr = res.data.roomCategories.map((category) => {
                    return {
                        value: category._id,
                        label: category.room_category,
                    };
                });

                setRoomCategories(arr);
                setRoomCategoriesArr(arr);
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response);
            });
    };

    const fetchRoomTypes = () => {
        axios
            .get('/api/rooms/room-types/view-room-types')
            .then((res) => {
                // console.log('room types', res);
                let arr = res.data.roomTypes.map((roomType) => {
                    return {
                        value: roomType._id,
                        label: roomType.room_type,
                    };
                });

                setRoomTypes(arr);
                setRoomTypesArr(arr);
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response);
            });
    };

    const fetchNoOfPeople = () => {
        axios
            .get('/api/fetch-num-of-people')
            .then((res) => {
                // console.log('no of people ', res);
                let roomArr = res.data.no_of_people_for_rooms.map((item) => {
                    return {
                        value: item,
                        label: item,
                    };
                });
                let hallArr = res.data.no_of_people_for_halls.map((item) => {
                    return {
                        value: item,
                        label: item,
                    };
                });

                setNoOfPeopleForRooms(roomArr);
                setNoOfPeopleForHalls(hallArr);
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response);
            });
    };

    const fetchHallCategories = () => {
        axios
            .get('/api/halls/hall-categories/view-hall-categories')
            .then((res) => {
                // console.log('hall categories', res);
                let arr = res.data.hallCategories.map((category) => {
                    return {
                        value: category._id,
                        label: category.hall_category,
                    };
                });

                setHallCategories(arr);
                setHallCategoriesArr(arr);
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response);
            });
    };

    const handleCheckAvailability = (e) => {
        e.preventDefault();
        setCheckAvailClicked(true);
        setCheckAvailErrMsg(null);
        if (roomSelected) {
            checkRoomAvailability();
            return;
        }
        if (hallSelected) {
            checkHallAvailability();
            return;
        }
    };

    const checkRoomAvailability = () => {
        if (
            (roomCategories.length && !selectedRoomCatHome) ||
            (roomTypes.length && !selectedRoomTypeHome) ||
            (noOfPeopleForRooms.length && !selectedPeopleNumRoomHome)
        ) {
            setCheckAvailErrMsg('please choose some fields');
            setCheckAvailClicked(null);
            return;
        }
        setCheckAvailErrMsg(null);

        axios
            .get('/api/check-room-availability', {
                params: {
                    room_category: selectedRoomCatHome && selectedRoomCatHome.value,
                    room_type: selectedRoomTypeHome && selectedRoomTypeHome.value,
                    no_of_people: selectedPeopleNumRoomHome && selectedPeopleNumRoomHome.value,
                },
            })
            .then((res) => {
                // console.log(res);
                setCheckAvailClicked(null);
                setCheckAvailResultsRoom(res.data.rooms);
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response);
                setCheckAvailClicked(null);
            });
    };

    const checkHallAvailability = () => {
        if (
            (hallCategories.length && !selectedHallCatHome) ||
            (noOfPeopleForHalls.length && !selectedPeopleNumHallHome)
        ) {
            setCheckAvailErrMsg('please choose some fields');
            setCheckAvailClicked(null);
            return;
        }
        setCheckAvailErrMsg(null);

        axios
            .get('/api/check-hall-availability', {
                params: {
                    hall_category: selectedHallCatHome && selectedHallCatHome.value,
                    no_of_people: selectedPeopleNumHallHome && selectedPeopleNumHallHome.value,
                },
            })
            .then((res) => {
                // console.log(res);
                setCheckAvailResultsHall(res.data.halls);
                setCheckAvailClicked(null);
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response);
                setCheckAvailClicked(null);
            });
    };

    return (
        <>
            {!!wholeScreenLoader && <WholeScreenLoader />}

            <div className="">
                <div className="home-title-container">
                    <div className="home-title-backdrop"></div>
                    <div className="title-intro-container">
                        <h1 className="home-title w-100 display-4 text-center my-3">Paradise Hotel</h1>
                        <div className="home-short-intro text-center">
                            your dream destination, book now for full package of happiness
                        </div>
                    </div>
                </div>
                <div className="container home-everything-below-title-container rounded p-3 shadow-sm">
                    <form>
                        <div className="w-100 d-flex flex-wrap justify-content-between align-items-center">
                            <div>
                                <h4 className="text-dark" style={{ fontWeight: 400 }}>
                                    Book now
                                </h4>
                            </div>
                            <div className="d-flex align-items-center">
                                <section className="select_hall_or_room_section  rounded">
                                    <button
                                        type="button"
                                        className={
                                            roomSelected
                                                ? 'btn rounded-0 home-select-btn home-select-room-btn active'
                                                : 'btn rounded-0 home-select-btn  home-select-room-btn'
                                        }
                                        onClick={() => {
                                            selectRoom();
                                        }}
                                    >
                                        room
                                    </button>
                                    <button
                                        type="button"
                                        className={
                                            hallSelected
                                                ? 'btn rounded-0 home-select-btn  home-select-hall-btn active'
                                                : 'btn rounded-0 home-select-btn  home-select-hall-btn'
                                        }
                                        onClick={() => {
                                            selectHall();
                                        }}
                                    >
                                        hall
                                    </button>
                                </section>
                                <section className="m-2">
                                    <button
                                        type="submit"
                                        className="btn btn-warning shadow-sm"
                                        onClick={(e) => {
                                            handleCheckAvailability(e);
                                        }}
                                        disabled={checkAvailClicked ? true : false}
                                    >
                                        <strong className="text-dark">
                                            {!!checkAvailClicked ? 'checking...' : 'check availability'}
                                        </strong>
                                    </button>
                                </section>
                            </div>
                        </div>
                        {!!checkAvailErrMsg && (
                            <div className="alert alert-danger small mt-2 py-2">{checkAvailErrMsg}</div>
                        )}
                        {/* {checkAvailResults && !checkAvailResults.length && (
                            <div className="alert alert-warning small py-2">{`sorry, no ${
                                roomSelected ? 'rooms' : 'halls'
                            } available, please choose another ${roomSelected ? 'room' : 'hall'}`}</div>
                        )} */}

                        <div className="d-flex flex-wrap my-2">
                            {roomSelected && (
                                <RoomForm
                                    roomCategories={roomCategories}
                                    roomTypes={roomTypes}
                                    noOfPeopleForRooms={noOfPeopleForRooms}
                                    // methods
                                    setSelectedPeopleNumRoomHome={setSelectedPeopleNumRoomHome}
                                    setSelectedRoomCatHome={setSelectedRoomCatHome}
                                    setSelectedRoomTypeHome={setSelectedRoomTypeHome}
                                />
                            )}
                            {hallSelected && (
                                <HallForm
                                    hallCategories={hallCategories}
                                    noOfPeopleForHalls={noOfPeopleForHalls}
                                    // methods
                                    setSelectedHallCatHome={setSelectedHallCatHome}
                                    setSelectedPeopleNumHallHome={setSelectedPeopleNumHallHome}
                                />
                            )}
                        </div>
                    </form>
                    {roomSelected && (
                        <CheckResults
                            roomSelected={roomSelected}
                            addToCart_Id={addToCart_Id}
                            setAddToCart_Id={setAddToCart_Id}
                            type="room"
                            arr={checkAvailResultsRoom}
                        />
                    )}
                    {hallSelected && (
                        <CheckResults
                            arr={checkAvailResultsHall}
                            roomSelected={roomSelected}
                            addToCart_Id={addToCart_Id}
                            type="hall"
                            setAddToCart_Id={setAddToCart_Id}
                        />
                    )}
                    {/*  */}
                    <div className="my-5 border rounded  p-4 bg-white">
                        <h1 className="display-4 text-center">About the hotel</h1>
                        <div className="text-muted text-center" style={{ fontSize: 20, fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, odio, ea blanditiis
                            accusantium voluptates molestias consectetur maxime cum non mollitia, iusto ad similique
                            totam tempora? Ipsa commodi ipsam fugit autem?
                        </div>
                    </div>
                    <RoomsSlider roomsArr={roomsArr} />
                    <HallsSlider hallsArr={hallsArr} />
                </div>
            </div>
        </>
    );
}

export default Home;
