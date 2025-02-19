import { reviews } from "../../utils/Reviews"
import ReviewCard from "./ReviewCard"

const ReviewSection = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {reviews?.map((review,index)=><ReviewCard review={review} key={index}/>)}
    </div>
  )
}

export default ReviewSection