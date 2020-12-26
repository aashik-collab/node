import React from 'react';

function MakeAdmin() {
    return (
        <>
            <form className="p-3">
                <h1 className="display-4 mb-3">Make Admin</h1>
                <div className="alert alert-danger small">some eror message</div>
                <div className="my-2">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="my-2">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                <div className="my-3">
                    <button type="submit" className="btn btn-primary">
                        Make Admin
                    </button>
                </div>
            </form>
        </>
    );
}

export default MakeAdmin;
