
import { servicePlan } from "../../utils/serviceplan"
import SeriesCard from "./SeriesCard"

const SeriesSection = () => {
  return (
    <div className="flex justify-center items-center gap-6 p-5">
        {servicePlan?.map(item=><SeriesCard key={item?.id} item={item}/>)}
    </div>
  )
}

export default SeriesSection