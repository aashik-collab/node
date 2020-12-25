import React from 'react';
import { Link } from 'react-router-dom';
import addToCart from '../cart/addToCart';

function CheckResults(props) {
    // states
    const { arr, roomSelected, addToCart_Id, type } = props;
    // methods
    const { setAddToCart_Id } = props;

    return (
        <>
            {arr && (
                <div className="my-2 p-4">
                    <div className="row p-3 bg-white border shadow-sm">
                        <div className="col-4">
                            <strong>Name</strong>
                        </div>
                        <div className="col-4">
                            <strong>Type</strong>
                        </div>
                        <div className="col-4">
                            <strong>Actions</strong>
                        </div>
                    </div>
                    {!arr.length && (
                        <div className="lead my-2 text-center text-dark">
                            No {roomSelected ? 'rooms' : 'halls'} to show
                        </div>
                    )}
                    {arr.map((result) => {
                        return (
                            <div className="row p-2 border-bottom">
                                <div className="col-4">{result.title}</div>
                                <div className="col-4">{type}</div>
                                <div className="col-4">
                                    <Link
                                        to={`/single-${type === 'room' ? 'room' : 'hall'}-page/${result._id}`}
                                        className="btn btn-sm btn-primary mx-1"
                                    >
                                        view
                                    </Link>
                                    <button
                                        className="btn btn-sm btn-success mx-1"
                                        onClick={() => {
                                            addToCart({
                                                type: roomSelected ? 'room' : 'hall',
                                                _id: result._id,
                                                name: result.title,
                                            });
                                            setAddToCart_Id(result._id);
                                            setTimeout(() => {
                                                setAddToCart_Id(null);
                                            }, 1500);
                                        }}
                                        disabled={addToCart_Id === result._id ? true : false}
                                    >
                                        {addToCart_Id === result._id ? 'added to cart' : 'Add to cart'}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
}

export default CheckResults;
