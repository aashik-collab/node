import React, { useState } from 'react';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';

import LoaderButton from '../../utils/LoaderButton';
import saveToken from '../../authFunctions/saveToken';

function Login(props) {
    // methods
    const { InformAppJsThatUserIsLoggedIn } = props;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [submitLoading, setSubmitLoading] = useState(null);
    const [errMsg, setErrMsg] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitLoading(true);
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        Axios.post('/api/users/login', formData)
            .then((res) => {
                setSubmitLoading(null);
                console.log(res);
                if (res.data.success) {
                    console.log(res.data.token);
                    saveToken(res.data.token);
                    InformAppJsThatUserIsLoggedIn();
                    props.history.goBack();
                }
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response);
                if (err.response) {
                    if (err.response.data) {
                        setErrMsg(err.response.data.message);
                    }
                }
                setSubmitLoading(null);
            });
    };

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                {!!errMsg && <div className="alert alert-danger small">{errMsg}</div>}
                <div className="my-2">
                    <label htmlFor="login-email" className="m-0 text-muted">
                        Email
                    </label>
                    <input
                        type="email"
                        id="login-email"
                        className="form-control bg-light"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>
                <div className="my-2">
                    <label htmlFor="login-password" className="m-0 text-muted">
                        Password
                    </label>
                    <input
                        type="password"
                        id="login-password"
                        className="form-control bg-light"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>
                <div className="my-3">
                    {!submitLoading && (
                        <button type="submit" className="btn btn-warning auth-btn auth-login-btn ">
                            login
                        </button>
                    )}
                    {!!submitLoading && <LoaderButton className="btn btn-warning" />}
                </div>
            </form>
        </div>
    );
}

export default withRouter(Login);
