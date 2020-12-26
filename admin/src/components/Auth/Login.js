import React, { useState } from 'react';
import Particles from 'react-particles-js';
import axios from 'axios';
import saveAdminToken from '../../utils/saveAdminToken';
import { withRouter } from 'react-router-dom';

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errMsg, setErrMsg] = useState(null);
    const [submitLoader, setSubmitLoader] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        setSubmitLoader(true);
        axios
            .post('/api/users/admin-login', formData)
            .then((res) => {
                console.log(res);
                setSubmitLoader(null);
                if (res.data.success) {
                    saveAdminToken(res.data.adminToken);
                    props.history.push('/admin/dashboard');
                }
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response);
                setSubmitLoader(null);
                if (err.response) {
                    setErrMsg(err.response.data.message);
                }
            });
    };

    return (
        <div className="login-page">
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 50,
                        },
                        size: {
                            value: 3,
                        },
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: 'repulse',
                            },
                        },
                    },
                }}
            />
            <form
                className="shadow"
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
            >
                <h1 className="display-4 mb-3">Admin Login</h1>
                {errMsg && <div className="alert alert-danger small">{errMsg}</div>}
                <div className="my-2">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>
                <div className="my-2">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>
                <div className="my-3">
                    <button
                        type="submit"
                        className="btn text-light shadow-sm"
                        disabled={submitLoader ? true : false}
                        style={{ backgroundColor: ' #3a4666' }}
                    >
                        {!submitLoader && <span>Login</span>}
                        {!!submitLoader && <span>loggin in...</span>}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default withRouter(Login);
