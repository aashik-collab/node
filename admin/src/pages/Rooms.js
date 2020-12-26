import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import CreateRoom from './Rooms/CreateRoom';
import RoomCategories from './Rooms/RoomCategories';
import RoomTypes from './Rooms/RoomTypes';
import RoomHome from './Rooms/RoomHome';
import ViewRooms from './Rooms/ViewRooms';
import checkAdminAuth from '../utils/checkAdminAuth';

function Rooms(props) {
    React.useEffect(() => {
        const authenticated = checkAdminAuth();
        if (!authenticated) {
            props.history.push('/admin');
        }
        return () => {};
    }, [props]);
    return (
        <div>
            <Route exact path="/admin/rooms" component={RoomHome} />
            <Route path="/admin/rooms/create-room" component={CreateRoom} />
            <Route path="/admin/rooms/room-categories" component={RoomCategories} />
            <Route path="/admin/rooms/room-types" component={RoomTypes} />
            <Route path="/admin/rooms/view-rooms" component={ViewRooms} />
        </div>
    );
}

export default withRouter(Rooms);
