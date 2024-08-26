import { carsIcons } from "../../utils/menu"

const CarSearchSection = () => {
  return (
    <div>
        <h1>Lets Find your car.</h1>
        <div>
            {carsIcons?.map(item=>{
              return(
                <div key={item?.id}>
                  <img src={item?.icon} alt={item?.alt} />
                </div>
              )
            })}
        </div>
    </div>
  )
}

export default CarSearchSection