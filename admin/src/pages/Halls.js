import React from 'react';
import { Route } from 'react-router-dom';
import CreateHall from './Halls/CreateHall';
import HallCategories from './Halls/HallCategories';
import HallMain from './Halls/HallMain';
import ViewHalls from './Halls/ViewHalls';

function Halls() {
    return (
        <div>
            <Route exact path="/halls" component={HallMain} />
            <Route path="/halls/create-hall" component={CreateHall} />
            <Route path="/halls/view-halls" component={ViewHalls} />
            <Route path="/halls/hall-categories" component={HallCategories} />
        </div>
    );
}

export default Halls;
