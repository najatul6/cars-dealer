import PropTypes from "prop-types";
const ReviewCard = ({review}) => {
    
  return (
    <div>
        <div>
            <img src={review?.img} alt={review?.style} />
        </div>
        <div>
            <h2>{review?.label} : {review?.style}</h2>
            <p>{review?.description}</p>
            <p>Reviews : {review?.rating}</p>
        </div>

    </div>
  )
}

export default ReviewCard