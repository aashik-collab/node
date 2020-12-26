import React from 'react';

function Spinner() {
    return (
        <div style={{ width: '100%', height: '100%' }} className="d-flex align-items-center justify-content-center">
            <div className="spinner-border" style={{ width: 30, height: 30, borderWidth: 2 }} role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    );
}

export default Spinner;
