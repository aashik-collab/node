import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fetchItemsFromCart from '../components/cart/fetchFromCart';
import removeFromCart from '../components/cart/removeFromCart';

function Cart() {
    const [items, setItems] = useState(fetchItemsFromCart() || []);

    const handleRemoveItem = (_id) => {
        removeFromCart(_id);
        setItems(fetchItemsFromCart());
    };

    return (
        <div className="container p-4">
            <h1 className=" display-4">My Cart</h1>
            <div className="my-4">
                <div className="row p-3 border shadow-sm">
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
                {items.map((item) => {
                    return (
                        <div className="row p-3 border-bottom">
                            <div className="col-4">{item.name}</div>
                            <div className="col-4">{item.type}</div>
                            <div className="col-4">
                                {item.type === 'room' && (
                                    <Link to={'/single-room-page/' + item._id} className="btn btn-sm btn-primary mx-1">
                                        view
                                    </Link>
                                )}
                                {item.type === 'hall' && (
                                    <Link to={'/single-hall-page/' + item._id} className="btn btn-sm btn-primary mx-1">
                                        view
                                    </Link>
                                )}
                                <button
                                    onClick={() => handleRemoveItem(item._id)}
                                    className="btn btn-sm btn-danger mx-1"
                                >
                                    remove
                                </button>
                            </div>
                        </div>
                    );
                })}
                {!items.length && (
                    <div className="my-4 text-center text-muted">
                        <h5 style={{ fontWeight: 400 }}>no items in the cart</h5>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;
