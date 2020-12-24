import React from 'react';
import moment from 'moment';
import RatingComponent from '../../utils/RatingComponent';

function Review(props) {
    const { review } = props;

    return (
        <>
            <div className="my-3">
                <div className="my-4">
                    <div className="d-flex align-items-center">
                        <img
                            className="align-self-start"
                            src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars/default._CR0,0,1024,1024_SX48_.png"
                            alt=""
                        />
                        <div className="px-2">
                            <strong className="small">{review.user_id.email.split('.')[0].split('@').join(' ')}</strong>
                            <RatingComponent avg_rating={review.rate_value} reviewsCount={null} />
                        </div>
                    </div>
                    <div className="small text-muted">
                        <span>
                            {moment(review.created_at).calendar()}, {moment(review.created_at).fromNow()}
                        </span>
                    </div>
                    <div className="my-2 px-3 py-2 text-dark rounded" style={{ backgroundColor: '#eee', fontSize: 15 }}>
                        {review.comment}
                    </div>
                </div>
                <hr />
            </div>
        </>
    );
}

export default Review;
