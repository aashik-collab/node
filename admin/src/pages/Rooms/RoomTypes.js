import React, { useState } from 'react';

function CreateRoomTypes() {
    const [roomType, setRoomType] = useState('');

    return (
        <div className="row p-4">
            <div className="col-12 col-md-8 py-4 px-2">
                <div className="bg-light border shadow-sm px-3 py-2 rounded">
                    <h4 className="lead mb-3">Create Room Type</h4>
                    <form>
                        <div className="my-2">
                            <label htmlFor="room-type">Room Type</label>
                            <input
                                type="text"
                                className="form-control"
                                id="room-type"
                                value={roomType}
                                onChange={(e) => {
                                    setRoomType(e.target.value);
                                }}
                            />
                        </div>
                        <div className="my-2">
                            <button className="btn btn-primary">create room type</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-12 col-md-4 py-4">
                <div className="bg-light border shadow-sm p-2 rounded">
                    <h4 className="lead ">Other Room Types</h4>
                </div>
            </div>
        </div>
    );
}

export default CreateRoomTypes;
