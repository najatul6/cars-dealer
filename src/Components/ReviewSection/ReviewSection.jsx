import { reviews } from "../../utils/Reviews"
import ReviewCard from "./ReviewCard"

const ReviewSection = () => {
  return (
    <div className="grid grid-cols-3">
        {reviews?.map((review,index)=><ReviewCard review={review} key={index}/>)}
    </div>
  )
}

export default ReviewSection