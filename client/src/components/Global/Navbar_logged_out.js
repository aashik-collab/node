import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../../styles/navbar.css';

function Navbar(props) {
    // states
    // methods
    const { toggleMobileSidebar } = props;

    return (
        <nav className="navbar_container d-flex align-items-center shadow" style={{ padding: '4px' }}>
            <div className="col-6 col-md-3">
                <div className="d-flex align-items-center justify-content-center">
                    <i
                        className={'fas fa-bars navbar_menu_icon d-block d-md-none '}
                        onClick={() => toggleMobileSidebar()}
                    ></i>
                    <h4 className="text-light navbar_logo">Logo</h4>
                </div>
            </div>
            <div className="col-0 d-none d-md-block col-md-6">
                <div className=" w-100 d-flex justify-content-center">
                    <NavLink exact className="rounded navbar_navlink" to="/">
                        Home
                    </NavLink>
                    <NavLink className="rounded navbar_navlink" to="/rooms">
                        Rooms
                    </NavLink>
                    <NavLink className="rounded navbar_navlink" to="/halls">
                        Halls
                    </NavLink>
                    <NavLink className="rounded navbar_navlink" to="/about-us">
                        About us
                    </NavLink>
                    <NavLink className="rounded navbar_navlink" to="/contact-us">
                        Contact us
                    </NavLink>
                </div>
            </div>
            <div className="col-6 col-md-3">
                <div className="d-flex justify-content-center">
                    <Link
                        to="/auth"
                        className="btn btn-warning text-dark my-2"
                        style={{ borderRadius: 20, fontWeight: 500 }}
                    >
                        login | signup
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
