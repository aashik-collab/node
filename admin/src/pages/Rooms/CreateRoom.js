import React from 'react';

function CreateRoom() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <h1 className="display-4 m-2 text-center text-muted">Create Room</h1>
            <div>
                <form
                    onSubmit={(e) => {
                        handleSubmit(e);
                    }}
                    className="form-container border rounded shadow-sm bg-white"
                >
                    <div>
                        <label htmlFor="room-title">Title</label>
                        <input type="text" className="form-control bg-light" id="room-title" />
                    </div>
                    <div></div>
                </form>
            </div>
        </div>
    );
}

export default CreateRoom;
