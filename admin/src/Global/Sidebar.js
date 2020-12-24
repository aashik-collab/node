import React, { useState } from 'react';

function Sidebar() {
    const [roomsClicked, setRoomsClicked] = useState(null);
    const [hallsClicked, setHallsClicked] = useState(null);
    const [bookingsClicked, setBookingsClicked] = useState(null);
    const [settingsClicked, setSettingsClicked] = useState(null);

    return (
        <>
            <div className="text-light sidebar-child w-100">
                <h4 className="p-2 text-center ">Admin</h4>

                <div className="">
                    <div
                        className=" p-2 lead sidebar-component-title shadow-sm text-left my-2"
                        onClick={() => {
                            setRoomsClicked((prev) => !prev);
                        }}
                    >
                        <span>Rooms</span>
                        {!!roomsClicked && <span className="material-icons">keyboard_arrow_down</span>}
                        {!roomsClicked && <span className="material-icons">keyboard_arrow_right</span>}
                    </div>
                    {!!roomsClicked && (
                        <div>
                            <div className="p-2 sidebar-button w-100">
                                <span>create room</span>
                                <span className="material-icons">keyboard_arrow_right</span>
                            </div>
                            <div className="p-2 sidebar-button w-100">
                                <span>create type</span>
                                <span className="material-icons">keyboard_arrow_right</span>
                            </div>
                            <div className="p-2 sidebar-button w-100">
                                <span>create category</span>
                                <span className="material-icons">keyboard_arrow_right</span>
                            </div>
                            <div className="p-2 sidebar-button w-100">
                                <span>view rooms</span>
                                <span className="material-icons">keyboard_arrow_right</span>
                            </div>

                            <div className="p-2 sidebar-button w-100">
                                <span>view types</span>
                                <span className="material-icons">keyboard_arrow_right</span>
                            </div>

                            <div className="p-2 sidebar-button w-100">
                                <span>view categories</span>
                                <span className="material-icons">keyboard_arrow_right</span>
                            </div>
                        </div>
                    )}
                </div>
                <div className="">
                    <div
                        className=" p-2 lead sidebar-component-title shadow-sm text-left my-2"
                        onClick={() => {
                            setHallsClicked((prev) => !prev);
                        }}
                    >
                        <span>Halls</span>
                        {!!hallsClicked && <span className="material-icons">keyboard_arrow_down</span>}
                        {!hallsClicked && <span className="material-icons">keyboard_arrow_right</span>}
                    </div>
                    {!!hallsClicked && (
                        <div>
                            <div className="p-2 sidebar-button w-100">
                                <span>create hall</span>
                                <span className="material-icons">keyboard_arrow_right</span>
                            </div>
                            <div className="p-2 sidebar-button w-100">
                                <span>create category</span>
                                <span className="material-icons">keyboard_arrow_right</span>
                            </div>
                            <div className="p-2 sidebar-button w-100">
                                <span>view rooms</span>
                                <span className="material-icons">keyboard_arrow_right</span>
                            </div>
                            <div className="p-2 sidebar-button w-100">
                                <span>view categories</span>
                                <span className="material-icons">keyboard_arrow_right</span>
                            </div>
                        </div>
                    )}
                </div>
                <div className="">
                    <div
                        className=" p-2 lead sidebar-component-title shadow-sm text-left my-2"
                        onClick={() => {
                            setBookingsClicked((prev) => !prev);
                        }}
                    >
                        <span>Bookings</span>
                        {!!bookingsClicked && <span className="material-icons">keyboard_arrow_down</span>}
                        {!bookingsClicked && <span className="material-icons">keyboard_arrow_right</span>}
                    </div>
                    {!!bookingsClicked && (
                        <div>
                            <div className="p-2 sidebar-button w-100">
                                <span>view bookings</span>
                                <span className="material-icons">keyboard_arrow_right</span>
                            </div>
                        </div>
                    )}
                </div>
                <div className="">
                    <div
                        className=" p-2 lead sidebar-component-title shadow-sm text-left my-2"
                        onClick={() => {
                            setSettingsClicked((prev) => !prev);
                        }}
                    >
                        <span>Settings</span>
                        {!!settingsClicked && <span className="material-icons">keyboard_arrow_down</span>}
                        {!settingsClicked && <span className="material-icons">keyboard_arrow_right</span>}
                    </div>
                    {!!settingsClicked && (
                        <div>
                            <div className="p-2 sidebar-button w-100">
                                <span>log out</span>
                                <span className="material-icons">keyboard_arrow_right</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Sidebar;
