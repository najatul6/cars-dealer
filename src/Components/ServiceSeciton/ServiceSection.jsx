import { servicesData } from "../../utils/serviceData"
import ServiceCard from "./ServiceCard"

const ServiceSection = () => {
  return (
    <div>
       {servicesData?.map(service=><ServiceCard key={service?.id}/>)}
    </div>
  )
}

export default ServiceSection