import { servicesData } from "../../utils/serviceData"
import ServiceCard from "./ServiceCard"

const ServiceSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 place-items-center">
       {servicesData?.map(service=><ServiceCard key={service?.id} service={service}/>)}
    </div>
  )
}

export default ServiceSection