import React, { useState } from 'react';
import '../styles/auth.css';

import { withRouter } from 'react-router-dom';
import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';
import Tab from '../components/Auth/Tab';

function Auth(props) {
    // methods
    const { InformAppJsThatUserIsLoggedIn } = props;

    const [loginClicked, setLoginClicked] = useState(true);
    const [signupClicked, setSignupClicked] = useState(null);

    const handleLoginClicked = () => {
        setLoginClicked(true);
        setSignupClicked(null);
    };

    const handleSignupClicked = () => {
        setLoginClicked(null);
        setSignupClicked(true);
    };

    return (
        <>
            <div className="auth_container mx-auto mt-5 border px-4 py-2 rounded bg-white shadow-sm">
                <Tab
                    loginClicked={loginClicked}
                    signupClicked={signupClicked}
                    handleLoginClicked={handleLoginClicked}
                    handleSignupClicked={handleSignupClicked}
                />
                {loginClicked && <Login InformAppJsThatUserIsLoggedIn={InformAppJsThatUserIsLoggedIn} />}
                {signupClicked && <Signup InformAppJsThatUserIsLoggedIn={InformAppJsThatUserIsLoggedIn} />}
            </div>
        </>
    );
}

export default withRouter(Auth);
