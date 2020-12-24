import React from 'react';
import { Route } from 'react-router-dom';
import CreateRoom from './Rooms/CreateRoom';

function Rooms() {
    return (
        <div>
            <Route path="/rooms/create-room" component={CreateRoom} />
        </div>
    );
}

export default Rooms;
