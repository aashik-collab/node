import React from 'react';
import { Route } from 'react-router-dom';
import CreateHall from './Halls/CreateHall';
import HallCategories from './Halls/HallCategories';
import HallMain from './Halls/HallMain';
import ViewHalls from './Halls/ViewHalls';

function Halls() {
    return (
        <div>
            <Route exact path="/admin/halls" component={HallMain} />
            <Route path="/admin/halls/create-hall" component={CreateHall} />
            <Route path="/admin/halls/view-halls" component={ViewHalls} />
            <Route path="/admin/halls/hall-categories" component={HallCategories} />
        </div>
    );
}

export default Halls;
