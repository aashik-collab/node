import React from 'react';
import { withRouter } from 'react-router-dom';

function NotFoundPage(props) {
    const goBack = () => {
        props.history.goBack();
    };
    console.log(props);
    return (
        <div className="w-100 h-100 bg-light p-5 text-center">
            <h2 className="display-4 text-muted mt-5 mb-4">Page Not Found</h2>
            <button
                className="btn btn-lg btn-primary"
                onClick={() => {
                    goBack();
                }}
            >
                <ion-icon name="return-up-back-outline"></ion-icon>
                <span>go back</span>
            </button>
        </div>
    );
}

export default withRouter(NotFoundPage);
