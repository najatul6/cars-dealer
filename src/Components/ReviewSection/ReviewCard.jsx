import PropTypes from "prop-types";
const ReviewCard = ({review}) => {
    
  return (
    <div>
        <div>
            <img src={review?.img} alt={review?.style} />
            <div className="py-3 px-2 bg-light-blue text-white font-bold -skew-x-12 inline-block">
              &raquo; {review?.rating}
            </div>
        </div>
        <div>
            <h2>{review?.label} : {review?.style}</h2>
            <p>{review?.description}</p>
            <p>Reviews : {review?.rating}</p>
        </div>

    </div>
  )
}
ReviewCard.propTypes={
    review: PropTypes.any,
}

export default ReviewCard