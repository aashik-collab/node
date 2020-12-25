import React, { useState } from 'react';

function CreateRoomCategories() {
    const [roomCategory, setRoomCategory] = useState('');

    return (
        <div className="row p-4">
            <div className="col-12 col-md-8 py-4 px-2">
                <div className="bg-light border shadow-sm px-3 py-2 rounded">
                    <h4 className="lead mb-3">Create Room Category</h4>
                    <form>
                        <div className="my-2">
                            <label htmlFor="room-category">Room Category</label>
                            <input
                                type="text"
                                className="form-control"
                                id="room-category"
                                value={roomCategory}
                                onChange={(e) => {
                                    setRoomCategory(e.target.value);
                                }}
                            />
                        </div>
                        <div className="my-2">
                            <button className="btn btn-primary">create room category</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-12 col-md-4 py-4">
                <div className="bg-light border shadow-sm p-2 rounded">
                    <h4 className="lead ">Other Room Categories</h4>
                </div>
            </div>
        </div>
    );
}

export default CreateRoomCategories;
