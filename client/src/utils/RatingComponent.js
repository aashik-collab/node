const RatingComponent = (props) => {
    let { avg_rating, reviewsCount } = props;

    let num = avg_rating;
    if (num == null || num === undefined) {
        num = 0;
        reviewsCount = 0;
    }

    num = num.toFixed(2);
    num = parseFloat(num);
    let intPart = Math.trunc(num);
    let showHalfStar = null;
    let emptyStarsCount = null;
    let decPart = parseFloat((num - intPart).toFixed(2));

    if (decPart >= 0.75) {
        intPart++;
    }
    if (decPart < 0.75 && decPart >= 0.25) {
        showHalfStar = true;
    }
    if ((intPart == 4 && showHalfStar) || intPart == 5) {
        emptyStarsCount = null;
    } else {
        emptyStarsCount = 5 - intPart;
    }

    let fullStarsArr = [];
    for (let i = 0; i < intPart; i++) {
        fullStarsArr.push(i);
    }

    let emptyStarsArr = [];
    for (let i = 0; i < emptyStarsCount; i++) {
        emptyStarsArr.push(i);
    }

    return (
        <section className="card-rating">
            {fullStarsArr.map((index) => {
                return <i key={index} className="fas fa-star"></i>;
            })}
            {!!showHalfStar && <i className="fas fa-star-half-alt"></i>}
            {emptyStarsArr.map((index) => {
                return <i key={index} className="far fa-star"></i>;
            })}
            {!!reviewsCount && <span className="small text-muted"> ({reviewsCount})</span>}
            {/* {!reviewsCount && <span className="small text-muted"> (0)</span>} */}
        </section>
    );
};

export default RatingComponent;
