import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar(props) {
    const [roomsClicked, setRoomsClicked] = useState(null);
    const [hallsClicked, setHallsClicked] = useState(null);
    const [bookingsClicked, setBookingsClicked] = useState(null);
    const [settingsClicked, setSettingsClicked] = useState(null);

    // methods
    const { toggleMobileSidebar } = props;

    return (
        <>
            <div className="text-light sidebar-child w-100">
                <h4 className="p-2 w-100 d-flex align-items-center justify-content-between ">
                    <span>Admin</span>
                    <span className="material-icons sidebar-close-icon" onClick={() => toggleMobileSidebar()}>
                        keyboard_backspace
                    </span>
                </h4>

                <div className="">
                    <div
                        className=" p-2 lead sidebar-component-title shadow-sm text-left my-2 "
                        onClick={() => {
                            setRoomsClicked((prev) => !prev);
                        }}
                    >
                        <span>Rooms</span>
                        {!!roomsClicked && <span className="material-icons">keyboard_arrow_down</span>}
                        {!roomsClicked && <span className="material-icons">keyboard_arrow_right</span>}
                    </div>
                    {!!roomsClicked && (
                        <div className="sidebar-buttons-container">
                            <NavLink to="/rooms/create-room" className="p-2 sidebar-button w-100">
                                <span>create room</span>
                                <span className="material-icons">keyboard_arrow_right</span>
                            </NavLink>
                            <NavLink to="/rooms/view-rooms" className="p-2 sidebar-button w-100">
                                <span>view rooms</span>
                                <span className="material-icons">keyboard_arrow_right</span>
                            </NavLink>
                            <NavLink to="/rooms/room-types" className="p-2 sidebar-button w-100">
                                <span>room types</span>
                                <span className="material-icons">keyboard_arrow_right</span>
                            </NavLink>
                            <NavLink to="/rooms/room-categories" className="p-2 sidebar-button w-100">
                                <span>room categories</span>
                                <span className="material-icons">keyboard_arrow_right</span>
                            </NavLink>
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
                            <NavLink to="/halls/create-hall" className="p-2 sidebar-button w-100">
                                <span>create hall</span>
                                <span className="material-icons">keyboard_arrow_right</span>
                            </NavLink>
                            <NavLink to="/halls/view-halls" className="p-2 sidebar-button w-100">
                                <span>view halls</span>
                                <span className="material-icons">keyboard_arrow_right</span>
                            </NavLink>
                            <NavLink to="/halls/hall-categories" className="p-2 sidebar-button w-100">
                                <span>hall Categories</span>
                                <span className="material-icons">keyboard_arrow_right</span>
                            </NavLink>
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
                            <div className="p-2 sidebar-button w-100">
                                <span>go to dashboard</span>
                                <span className="material-icons">keyboard_arrow_right</span>
                            </div>
                            <div className="p-2 sidebar-button w-100">
                                <span>make admin</span>
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
