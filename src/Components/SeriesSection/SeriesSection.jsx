
import { seriesPlan } from "../../utils/seriesPlan"
import SeriesCard from "./SeriesCard"

const SeriesSection = () => {
  return (
    <div className="flex justify-center items-center gap-6 p-5">
        {seriesPlan?.map(item=><SeriesCard key={item?.id} item={item}/>)}
    </div>
  )
}

export default SeriesSection