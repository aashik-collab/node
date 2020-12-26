import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import checkAdminAuth from '../utils/checkAdminAuth';
import CreateHall from './Halls/CreateHall';
import HallCategories from './Halls/HallCategories';
import HallMain from './Halls/HallMain';
import ViewHalls from './Halls/ViewHalls';

function Halls(props) {
    React.useEffect(() => {
        const authenticated = checkAdminAuth();
        if (!authenticated) {
            props.history.push('/admin');
        }
        return () => {};
    }, [props]);
    return (
        <div>
            <Route exact path="/admin/halls" component={HallMain} />
            <Route path="/admin/halls/create-hall" component={CreateHall} />
            <Route path="/admin/halls/view-halls" component={ViewHalls} />
            <Route path="/admin/halls/hall-categories" component={HallCategories} />
        </div>
    );
}

export default withRouter(Halls);
