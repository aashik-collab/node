import React from 'react';
import { withRouter } from 'react-router-dom';

function Dashboard(props) {
    console.log(props);
    return (
        <div className="p-5 text-center">
            <h1 className="my-5 display-4 text-muted">Dashboard</h1>
        </div>
    );
}

export default withRouter(Dashboard);
