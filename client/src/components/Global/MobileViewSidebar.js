import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../styles/mobileViewSidebar.css';

function Sidebar(props) {
    // states
    const { showMobileSidebar } = props;
    // methods
    const { toggleMobileSidebar } = props;

    return (
        <div
            className={
                showMobileSidebar ? 'mobileViewSidebar-container shadow-lg show' : 'mobileViewSidebar-container hide'
            }
        >
            <div style={{ position: 'relative' }}>
                <h3 className="mobileViewSidebar-logo m-2">Logo</h3>
                <i className="fas fa-arrow-left mobileViewSidebar-arrow-left" onClick={() => toggleMobileSidebar()}></i>
            </div>
            <hr style={{ color: 'rgb(127, 0, 247)' }} />
            <div className="mobileViewSidebar-buttons-container d-flex flex-column">
                <NavLink className="mobileViewSidebar-button" exact to="/">
                    Home
                </NavLink>
                <NavLink className="mobileViewSidebar-button" to="/rooms">
                    Rooms
                </NavLink>
                <NavLink className="mobileViewSidebar-button" to="/halls">
                    Halls
                </NavLink>
                <NavLink className="mobileViewSidebar-button" to="/about-us">
                    About us
                </NavLink>
                <NavLink className="mobileViewSidebar-button" to="/contact-us">
                    Contact us
                </NavLink>
            </div>
        </div>
    );
}

export default Sidebar;
