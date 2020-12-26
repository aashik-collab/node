import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
    return (
        <div className="m-3 p-2 rounded shadow-sm border bg-light" style={{ width: 300 }}>
            <div className="">
                <img
                    loading="lazy"
                    className="cardFixedSize-img"
                    style={{ maxWidth: '100%' }}
                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjByb29tfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                />
            </div>
            <div>
                <section className="card-title">
                    <Link to="/single-room-page/">some title</Link>
                </section>
                <section className="card-price text-success">
                    <>
                        <span style={{ textDecoration: 'line-through', marginRight: 4 }}>$price</span>
                        <span className="">$discount</span>
                    </>

                    <>
                        <span className="">'price'</span>
                    </>
                </section>

                <section className="card-button">
                    <Link to={'/single-room-page/'} className="w-100 btn my-2 btn-danger">
                        delete room
                    </Link>
                </section>
            </div>
        </div>
    );
}

export default Card;
