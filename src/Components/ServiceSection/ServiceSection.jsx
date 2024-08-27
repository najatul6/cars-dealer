
import { servicePlan } from "../../utils/serviceplan"
import ServiceCard from "./ServiceCard"

const ServiceSection = () => {
  return (
    <div className="flex justify-center items-center gap-6 p-5">
        {servicePlan?.map(item=><ServiceCard key={item?.id} item={item}/>)}
    </div>
  )
}

export default ServiceSection