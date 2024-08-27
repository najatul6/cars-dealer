
import { servicePlan } from "../../utils/serviceplan"
import ServiceCard from "./ServiceCard"

const ServiceSection = () => {
  return (
    <div>
        {servicePlan?.map(item=><ServiceCard key={item?.id} item={item}/>)}
    </div>
  )
}

export default ServiceSection