import PropTypes from "prop-types";
import { useState } from "react";
const ReviewCard = ({ review }) => {
  const [isRead, setIsRead] = useState();
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
        <p>{`${
          isRead
            ? review?.description
            : review?.description.slice(0, 100) + "..."
        }`}</p>
        <button
          onClick={() => setIsRead(!isRead)}
          className="text-light-blue"
        >{`${isRead ? "Read less" : "Read more"}`}</button>
      </div>
    </div>
  );
};
ReviewCard.propTypes = {
  review: PropTypes.any,
};

export default ReviewCard;
