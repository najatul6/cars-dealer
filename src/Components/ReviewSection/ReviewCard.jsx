
const ReviewCard = ({review}) => {
    
  return (
    <div>
        <div>
            <img src={review?.img} alt={review} />
        </div>

    </div>
  )
}

export default ReviewCard