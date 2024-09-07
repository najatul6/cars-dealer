import PropTypes from "prop-types";
const ReviewCard = ({review}) => {
    
  return (
    <div>
        <div className="relative">
            <img src={review?.img} alt={review?.style} />
            <div className="absolute -bottom-5 left-5 py-2 px-4 bg-light-blue text-white font-bold -skew-x-12 inline-block">
              &raquo; {review?.rating}
            </div>
        </div>
        <div className="mt-10 space-y-4">
            <h2 className="text-xl text-white font-bold"> {review?.style}</h2>
            <p>{review?.description.slice(0,200) + "..."}</p>
            <a href="#" className="text-light-blue">Read more &raquo;</a>
        </div>

    </div>
  )
}
ReviewCard.propTypes={
    review: PropTypes.any,
}

export default ReviewCard