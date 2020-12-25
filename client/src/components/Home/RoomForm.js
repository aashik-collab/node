import React, { useState } from 'react';
import Select from 'react-select';
// import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

function RoomForm(props) {
    // states
    const { roomCategories, roomTypes, noOfPeopleForRooms } = props;
    // methods
    const { setSelectedPeopleNumRoomHome, setSelectedRoomCatHome, setSelectedRoomTypeHome } = props;

    // const [startDate, setStartDate] = useState(new Date());
    // const [endDate, setEndDate] = useState(new Date());

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedType, setSelectedType] = useState(null);
    const [selectedNum, setSelectedNum] = useState(null);

    return (
        <>
            <section className="col-12 col-sm-6 col-md-4 ">
                <div className="m-2">
                    <label htmlFor="select-no-of-people" className="small text-muted">
                        No. of people
                    </label>
                    <Select
                        options={noOfPeopleForRooms}
                        onChange={(selected) => {
                            setSelectedNum(selected);
                            setSelectedPeopleNumRoomHome(selected);
                        }}
                        value={selectedNum}
                    />
                </div>
            </section>
            <section className="col-12 col-sm-6 col-md-4 ">
                <div className="m-2">
                    <label htmlFor="select-room-category" className="small text-muted">
                        Room category
                    </label>
                    <Select
                        options={roomCategories}
                        onChange={(selected) => {
                            setSelectedCategory(selected);
                            setSelectedRoomCatHome(selected);
                        }}
                        value={selectedCategory}
                    />
                </div>
            </section>
            <section className="col-12 col-sm-6 col-md-4 ">
                <div className="m-2">
                    <label htmlFor="select-room-type" className="small text-muted">
                        Room Type
                    </label>
                    <Select
                        options={roomTypes}
                        onChange={(selected) => {
                            setSelectedType(selected);
                            setSelectedRoomTypeHome(selected);
                        }}
                        value={selectedType}
                    />
                </div>
            </section>
            {/* <section className="col-12 col-sm-6 col-md-4 ">
                <div className="m-2">
                    <label htmlFor="select-check-in-date" className="small text-muted d-block">
                        check in date
                    </label>
                    <DatePicker
                        className="form-control"
                        id="select-check-in-date"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                    />
                </div>
            </section>
            <section className="col-12 col-sm-6 col-md-4 ">
                <div className="m-2">
                    <label htmlFor="select-check-out-date" className="small text-muted d-block">
                        check out date
                    </label>
                    <DatePicker
                        className="form-control"
                        id="select-check-out-date"
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                    />
                </div>
            </section> */}
        </>
    );
}

export default RoomForm;
