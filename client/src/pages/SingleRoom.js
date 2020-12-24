import React, { useState, useEffect } from 'react';
import TextAreaAutoSize from 'react-textarea-autosize';
import axios from 'axios';
import Review from '../components/Global/Review';
import LoaderButton from '../utils/LoaderButton';
import RatingComponent from '../utils/RatingComponent';
import WholeScreenLoader from '../utils/WholeScreenLoader';
import getToken from '../authFunctions/getToken';
import checkIfAuthenticated from '../authFunctions/checkIfAuthenticated';
import { withRouter } from 'react-router-dom';
import addToCart from '../components/cart/addToCart';

function SingleRoom(props) {
    const [room, setRoom] = useState({});
    const [roomReviews, setRoomReviews] = useState([]);

    const [rateValueInput, setRateValue] = useState(0);
    const [reviewInput, setReviewInput] = useState('');

    const [reviewSubmitSuccess, setReviewSubmitSuccess] = useState(null);
    const [reviewSubmitErrMsg, setReviewSubmitErrMsg] = useState(null);
    const [reviewSubmitLoader, setReviewSubmitLoader] = useState(null);
    const [wholeScreenLoader, setWholeScreenLoader] = useState(null);

    const [authenticated, setAuthenticated] = useState(null);
    const [addToCartClicked, setAddToCartClicked] = useState(null);

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        if (rateValueInput === 0) {
            setReviewSubmitErrMsg('please specify your rating');
            return;
        }
        if (!reviewInput.length) {
            setReviewSubmitErrMsg('please write a review before submitting');
            return;
        }
        setReviewSubmitLoader(true);
        const formData = new FormData();
        formData.append('rate_value', rateValueInput);
        formData.append('comment', reviewInput);

        axios
            .post(`/api/rooms/room-reviews/create/${props.match.params.room_id}`, formData, {
                headers: {
                    Authorization: getToken(),
                },
            })
            .then((res) => {
                // console.log(res);
                setReviewSubmitLoader(null);
                if (res.data.success) {
                    setReviewSubmitSuccess(true);
                    setReviewSubmitErrMsg(null);
                    setRateValue(0);
                    setReviewInput('');
                }
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response);
                setReviewSubmitSuccess(null);
                setReviewSubmitLoader(null);

                if (err.response) {
                    if (err.response.data) {
                        setReviewSubmitErrMsg(err.response.data.message);
                    }
                }
            });
    };

    useEffect(() => {
        // check if authenticated
        const auth = checkIfAuthenticated();
        if (auth) {
            setAuthenticated(true);
        } else {
            setAuthenticated(null);
        }

        setWholeScreenLoader(true);
        axios
            .get('/api/rooms/view-room-with-reviews/' + props.match.params.room_id)
            .then((res) => {
                // console.log(res);
                setWholeScreenLoader(null);
                if (res.data.success) {
                    setRoom(res.data.room);
                    setRoomReviews(res.data.roomReviews);
                }
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response);
                setWholeScreenLoader(null);
                if (err.response) {
                    if (err.response.status === 500 || err.response.status === 404) {
                        props.history.push('/not-found');
                    }
                }
            });
        return () => {};
    }, []);

    return (
        <>
            {!!wholeScreenLoader && <WholeScreenLoader />}
            <div className="container bg-light">
                <div className="row">
                    <div className="col-12 col-md-6 my-3">
                        <div className="border rounded p-2 shadow-sm">
                            <img
                                loading="lazy"
                                src="https://images.unsplash.com/photo-1441794016917-7b6933969960?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60"
                                alt=""
                                style={{ minWidth: '100%', maxWidth: '100%' }}
                                className="rounded"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 my-3 p-3">
                        <h3 className="text-dark display-4" style={{ fontSize: 36 }}>
                            {room.title}
                        </h3>
                        <div className="single-room-ratings-container">
                            {room.avg_rating && (
                                <RatingComponent avg_rating={room.avg_rating} reviewsCount={roomReviews.length} />
                            )}
                            {!room.avg_rating && <RatingComponent avg_rating={0} reviewsCount={0} />}
                        </div>
                        <div className="single-room-buttons-container my-4">
                            <button
                                className="btn btn-warning w-75 my-1 "
                                onClick={() => {
                                    addToCart({ type: 'room', _id: room._id, name: room.title });
                                    setAddToCartClicked(true);
                                    setTimeout(() => {
                                        setAddToCartClicked(null);
                                    }, 1500);
                                }}
                                disabled={addToCartClicked ? true : false}
                            >
                                <strong className="text-dark">
                                    {addToCartClicked ? 'added to cart' : 'Add to cart'}
                                </strong>
                            </button>
                            <button className="btn btn-success w-75 my-1">
                                <strong className="text-light">Book room</strong>
                            </button>
                        </div>
                        <div>
                            <a href="#view-room-reviews-container">view reviews</a>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className="add-rating-container ">
                    <h4 className="display-4" style={{ fontSize: 30 }}>
                        Add a review
                    </h4>
                    {!!reviewSubmitSuccess && (
                        <div className="alert alert-success small">your review has been added</div>
                    )}
                    {!!reviewSubmitErrMsg && <div className="alert alert-danger small">{reviewSubmitErrMsg}</div>}
                    {!authenticated && (
                        <div className="alert alert-warning small">
                            you are not logged in, please log in to add your review
                        </div>
                    )}
                    <div className="add-rating-icons-container">
                        <i
                            className="fas fa-star"
                            style={{ color: rateValueInput >= 1 ? '#ffb01d' : '#9f9f9f' }}
                            onClick={() => {
                                setRateValue(1);
                            }}
                            onMouseEnter={() => {
                                setRateValue(1);
                            }}
                            // onMouseLeave={() => {
                            //     setRateValue(0);
                            // }}
                        ></i>
                        <i
                            className="fas fa-star"
                            style={{ color: rateValueInput >= 2 ? '#ffb01d' : '#9f9f9f' }}
                            onClick={() => {
                                setRateValue(2);
                            }}
                            onMouseOver={() => {
                                setRateValue(2);
                            }}
                            // onMouseLeave={() => {
                            //     setRateValue(0);
                            // }}
                        ></i>
                        <i
                            className="fas fa-star"
                            style={{ color: rateValueInput >= 3 ? '#ffb01d' : '#9f9f9f' }}
                            onClick={() => {
                                setRateValue(3);
                            }}
                            onMouseOver={() => {
                                setRateValue(3);
                            }}
                            // onMouseLeave={() => {
                            //     setRateValue(0);
                            // }}
                        ></i>
                        <i
                            className="fas fa-star"
                            style={{ color: rateValueInput >= 4 ? '#ffb01d' : '#9f9f9f' }}
                            onClick={() => {
                                setRateValue(4);
                            }}
                            onMouseOver={() => {
                                setRateValue(4);
                            }}
                            // onMouseLeave={() => {
                            //     setRateValue(0);
                            // }}
                        ></i>
                        <i
                            className="fas fa-star"
                            style={{ color: rateValueInput >= 5 ? '#ffb01d' : '#9f9f9f' }}
                            onClick={() => {
                                setRateValue(5);
                            }}
                            onMouseOver={() => {
                                setRateValue(5);
                            }}
                            // onMouseOut={() => {
                            //     setRateValue(0);
                            // }}
                        ></i>
                    </div>
                    <div>
                        <form onSubmit={(e) => handleReviewSubmit(e)}>
                            <div>
                                <label htmlFor="room-review-text" className="text-muted my-1">
                                    Write a review
                                </label>
                                <TextAreaAutoSize
                                    id="room-review-text"
                                    className="form-control"
                                    minRows={2}
                                    maxRows={10}
                                    value={reviewInput}
                                    onChange={(e) => setReviewInput(e.target.value)}
                                />
                            </div>
                            <div className="my-2">
                                {!reviewSubmitLoader && (
                                    <button type="submit" className="btn btn-sm btn-primary">
                                        <strong className="text-light">submit</strong>
                                    </button>
                                )}
                                {!!reviewSubmitLoader && <LoaderButton className="btn btn-sm btn-primary" />}
                            </div>
                        </form>
                    </div>
                </div>
                {/*  */}
                <div className="mt-3 mb-5" id="view-room-reviews-container">
                    <h4 className="display-4" style={{ fontSize: 30 }}>
                        Room reviews
                    </h4>
                    {!!roomReviews.length &&
                        roomReviews.map((review) => {
                            return <Review key={review._id} review={review} />;
                        })}
                    {!roomReviews.length && (
                        <div className="pb-5 pt-3 text-muted text-center">
                            <h5 style={{ fontWeight: 400 }}>No reviews added yet</h5>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default withRouter(SingleRoom);
