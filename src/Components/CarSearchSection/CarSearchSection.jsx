import { carsIcons } from "../../utils/menu"

const CarSearchSection = () => {
  return (
    <div className="p-5">
        <h1 className="text-2xl  lg:text-3xl text-white font-bold text-center pb-5">Lets Find your car.</h1>
        <div className="flex justify-center items-center gap-6 py-5">
            {carsIcons?.map(item=>{
              return(
                <div key={item?.id} className="flex flex-col justify-center items-center gap-3">
                  <img src={item?.icon} alt={item?.alt} className="w-16 h-10"/>
                  <p className="text-xl uppercase font-bold ">{item?.alt}</p>
                </div>
              )
            })}
        </div>
    </div>
  )
}

export default CarSearchSection