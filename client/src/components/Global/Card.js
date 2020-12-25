import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/card.css';

import RatingComponent from '../../utils/RatingComponent';
import addToCart from '../cart/addToCart';

function Card(props) {
    // states
    const { item, type } = props;

    const [addToCartClicked, setAddToCartClicked] = useState(null);

    return (
        <div className="m-2 p-2 rounded shadow-sm border bg-light">
            <div className="">
                <img
                    loading="lazy"
                    style={{ maxWidth: '100%' }}
                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjByb29tfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                />
            </div>
            <div>
                <section className="card-title">
                    {type === 'room' && (
                        <Link to={'/single-room-page/' + item._id}>
                            {item && item.title ? item.title : 'some title'}
                        </Link>
                    )}
                    {type === 'hall' && (
                        <Link to={'/single-hall-page/' + item._id}>
                            {item && item.title ? item.title : 'some title'}
                        </Link>
                    )}
                </section>
                <section className="card-price text-success">
                    {item && item.discount && (
                        <>
                            <span style={{ textDecoration: 'line-through', marginRight: 4 }}>${item.price}</span>
                            <span className="">${item.price - item.discount}</span>
                        </>
                    )}
                    {item && !item.discount && (
                        <>
                            <span className="">${item.price}</span>
                        </>
                    )}
                </section>
                {item && <RatingComponent avg_rating={item.avg_rating} reviewsCount={item.reviewsCount} />}
                <section className="card-button">
                    <button
                        className="w-100 mt-2 btn btn-success"
                        onClick={() => {
                            addToCart({ type: type, _id: item._id, name: item.title });
                            setAddToCartClicked(true);
                            setTimeout(() => {
                                setAddToCartClicked(null);
                            }, 1500);
                        }}
                        disabled={addToCartClicked ? true : false}
                    >
                        {addToCartClicked ? 'added to cart' : 'Add To Cart'}
                    </button>
                    {type === 'room' && (
                        <Link to={'/single-room-page/' + item._id} className="w-100 btn my-2 btn-primary">
                            view room
                        </Link>
                    )}
                    {type === 'hall' && (
                        <Link to={'/single-hall-page/' + item._id} className="w-100 btn my-2 btn-primary">
                            view hall
                        </Link>
                    )}
                </section>
            </div>
        </div>
    );
}

export default Card;
