import React from 'react';
import { Route } from 'react-router-dom';
import CreateRoom from './Rooms/CreateRoom';
import RoomCategories from './Rooms/RoomCategories';
import RoomTypes from './Rooms/RoomTypes';
import RoomHome from './Rooms/RoomHome';
import ViewRooms from './Rooms/ViewRooms';

function Rooms() {
    return (
        <div>
            <Route exact path="/rooms" component={RoomHome} />
            <Route path="/rooms/create-room" component={CreateRoom} />
            <Route path="/rooms/room-categories" component={RoomCategories} />
            <Route path="/rooms/room-types" component={RoomTypes} />
            <Route path="/rooms/view-rooms" component={ViewRooms} />
        </div>
    );
}

export default Rooms;
