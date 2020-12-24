import React from 'react';

import '../styles/wholeScreenLoader.css';

function WholeScreenLoader() {
    return (
        <div className="whole-screen-loader-container">
            <div className="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
            </div>
        </div>
    );
}

export default WholeScreenLoader;
