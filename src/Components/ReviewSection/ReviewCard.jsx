
const ReviewCard = ({review}) => {
    
  return (
    <div>
        <div>
            <img src={review?.img} alt={review?.style} />
        </div>
        <div>
            <h2>{review?.label} : {review?.style}</h2>
            <p>{review?.description}</p>
            <p>{review?.rating}</p>
        </div>

    </div>
  )
}

export default ReviewCard