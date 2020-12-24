import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import removeToken from '../../authFunctions/removeToken';
import '../../styles/navbar.css';
import '../../styles/navbar_logged_in.css';

function Navbar(props) {
    // states
    // methods
    const { toggleMobileSidebar, InformAppJsThatUserIsLoggedOut } = props;

    return (
        <nav className="navbar_container d-flex align-items-center shadow" style={{ padding: '9px 4px' }}>
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
                    <NavLink
                        to="/cart"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="view cart"
                        className="navbar_logged_in_link_icons"
                    >
                        <i className="fas fa-shopping-cart"></i>
                    </NavLink>
                    <NavLink
                        to="/profile"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="view profile"
                        className="navbar_logged_in_link_icons"
                    >
                        <i className="fas fa-user-alt"></i>
                    </NavLink>
                    <span
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="log out"
                        className="navbar_logged_in_link_icons"
                        onClick={() => {
                            removeToken();
                            InformAppJsThatUserIsLoggedOut();
                        }}
                    >
                        <i className="fas fa-sign-out-alt"></i>
                    </span>
                </div>
            </div>
        </nav>
    );
}

export default withRouter(Navbar);
