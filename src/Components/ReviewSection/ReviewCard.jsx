
const ReviewCard = ({review}) => {
    
  return (
    <div>
        <div>
            <img src={review?.img} alt={review?.style} />
        </div>

    </div>
  )
}

export default ReviewCard