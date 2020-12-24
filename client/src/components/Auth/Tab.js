import React from 'react';

function Tab(props) {
    // states
    const { loginClicked, signupClicked } = props;
    // methods
    const { handleLoginClicked, handleSignupClicked } = props;

    return (
        <div className="d-flex mb-4">
            <div
                className={
                    loginClicked ? 'tab-btn login-tab p-2 text-muted active' : 'tab-btn login-tab p-2 text-muted'
                }
                onClick={() => handleLoginClicked()}
            >
                login
            </div>
            <div
                className={
                    signupClicked ? 'tab-btn signup-tab p-2 text-muted active' : 'tab-btn signup-tab p-2 text-muted'
                }
                onClick={() => handleSignupClicked()}
            >
                signup
            </div>
        </div>
    );
}

export default Tab;
