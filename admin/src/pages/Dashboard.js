import React from 'react';
import { withRouter } from 'react-router-dom';
import checkAdminAuth from '../utils/checkAdminAuth';

function Dashboard(props) {
    React.useEffect(() => {
        const authenticated = checkAdminAuth();
        if (!authenticated) {
            props.history.push('/admin');
        }
        return () => {};
    }, [props]);

    return (
        <div className="p-5 text-center">
            <h1 className="my-5 display-4 text-muted">Dashboard</h1>
        </div>
    );
}

export default withRouter(Dashboard);
