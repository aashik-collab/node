import React from 'react';

function Navbar(props) {
    const { toggleMobileSidebar } = props;
    return (
        <div className="p-3 bg-light border-bottom ">
            <h1 className="d-flex align-items-center" style={{ fontSize: 24, fontWeight: 400 }}>
                <span className="material-icons sidebar-close-icon mx-3" onClick={() => toggleMobileSidebar()}>
                    menu
                </span>
                <span></span>
            </h1>
        </div>
    );
}

export default Navbar;
