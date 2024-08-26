import { carsIcons } from "../../utils/menu"

const CarSearchSection = () => {
  return (
    <div>
        <h1 className="">Lets Find your car.</h1>
        <div>
            {carsIcons?.map(item=>{
              return(
                <div key={item?.id} className="flex flex-col justify-center items-center gap-3">
                  <img src={item?.icon} alt={item?.alt} className="w-16"/>
                  <p className="text-xl uppercase font-bold ">{item?.alt}</p>
                </div>
              )
            })}
        </div>
    </div>
  )
}

export default CarSearchSection