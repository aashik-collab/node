import Axios from 'axios';
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import saveToken from '../../authFunctions/saveToken';
import LoaderButton from '../../utils/LoaderButton';

function Signup(props) {
    // methods
    const { InformAppJsThatUserIsLoggedIn } = props;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState(null);

    const [submitLoader, setSubmitLoader] = useState(null);
    const [errMsg, setErrMsg] = useState(null);
    const [successMsg, setSuccessMsg] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitLoader(true);

        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        Axios.post('/api/users/signup', formData)
            .then((res) => {
                console.log(res);
                setSubmitLoader(null);
                if (res.data.success) {
                    setSuccessMsg('signup successful');
                    setErrMsg(null);
                    setToken(res.data.token);
                    setSuccess(true);
                }
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response);
                setSubmitLoader(null);
                if (err.response) {
                    if (err.response.data) {
                        setErrMsg(err.response.data.message);
                        setSuccessMsg(null);
                    }
                }
            });
    };

    const handleLogin = () => {
        saveToken(token);
        props.history.goBack();
        InformAppJsThatUserIsLoggedIn();
    };

    return (
        <div>
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    {!!successMsg && <div className="alert alert-success small">{successMsg}</div>}
                    {!!errMsg && <div className="alert alert-danger small">{errMsg}</div>}
                    <div className="my-2">
                        <label htmlFor="signup-email" className="m-0 text-muted">
                            Email
                        </label>
                        <input
                            type="email"
                            id="login-email"
                            className="form-control bg-light"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setSuccessMsg(null);
                                setErrMsg(null);
                            }}
                        />
                    </div>
                    <div className="my-2">
                        <label htmlFor="signup-password" className="m-0 text-muted">
                            Password
                        </label>
                        <input
                            type="password"
                            id="signup-password"
                            className="form-control bg-light"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setSuccessMsg(null);
                                setErrMsg(null);
                            }}
                        />
                    </div>
                    <div className="my-3">
                        {!submitLoader && (
                            <button type="submit" className="btn btn-primary auth-btn auth-signup-btn">
                                Signup
                            </button>
                        )}
                        {!!submitLoader && <LoaderButton className="btn btn-primary" />}
                        {!!success && (
                            <button className="btn btn-success" style={{ marginLeft: 8 }} onClick={() => handleLogin()}>
                                login
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default withRouter(Signup);
