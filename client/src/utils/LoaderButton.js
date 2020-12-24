import React from 'react';

function LoaderButton(props) {
    const { className } = props;
    return (
        <button type="button" className={className} disabled>
            <div className="spinner-border" style={{ height: 16, width: 16, borderWidth: 2 }} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </button>
    );
}

export default LoaderButton;
