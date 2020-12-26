import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import MakeAdmin from '../components/Auth/MakeAdmin';
import checkAdminAuth from '../utils/checkAdminAuth';

function Auth(props) {
    React.useEffect(() => {
        const authenticated = checkAdminAuth();
        if (!authenticated) {
            props.history.push('/admin');
        }
        return () => {};
    }, [props]);

    return (
        <div>
            <Route path="/admin/auth/make-admin" component={MakeAdmin} />
        </div>
    );
}

export default withRouter(Auth);
