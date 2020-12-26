import React from 'react';

function ViewRooms() {
    return (
        <div>
            <h1 className="display-4 text-muted"> Rooms</h1>
            <div>
                <input type="search" className="form-control shadow-sm rounded-0" placeholder="type room title..." />
            </div>
            <div className="d-flex flex-wrap justify-content-center my-4 w-100"></div>
        </div>
    );
}

export default ViewRooms;
