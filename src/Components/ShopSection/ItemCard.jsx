import { Rating } from "@smastrom/react-rating"
import PropTypes from "prop-types";

const ItemCard = ({item}) => {
  const {images,name,price, rating,stoke,weight,colorOptions,isOnSale} = item
  // console.log(item.image);
  return (
    <div className="card shadow-2xl rounded-none w-full">
      <figure>
        <img src={images[0]} alt={name} className="h-[317px] w-full" />
      </figure>
      <div className="card-body items-center text-center text-white">

          <Rating style={{ maxWidth: 120 }} value={rating} readOnly />

        <h2 className="card-title ">{name}</h2>
        <p>{price}</p>
        <div className="flex justify-center items-center gap-1">
        {colorOptions.map((color, index) => (
            <div
              key={index}
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: color }}
              title={color}
            ></div>
          ))}
          {/* <p className={`w-2 h-2 rounded-full text-${colorOptions[0]}-600`}>{colorOptions[0]}</p>
          <p className={`w-2 h-2 rounded-full text-${colorOptions[1]}-600`}>{colorOptions[1]}</p>
          <p className={`w-2 h-2 rounded-full text-${colorOptions[2]}-600`}>{colorOptions[2]}</p> */}
        </div>
        <div className="card-actions">
          <button className={`${isOnSale || "disabled"} btn bg-regal-blue hover:bg-light-blue text-white outline-none border-none rounded-none font-bold`}>
            {isOnSale?"Add to Cart":"Out of stock"}
          </button>
        </div>
      </div>
    </div>
  )
}

ItemCard.propTypes={
  item:PropTypes.any.isRequired,
}

export default ItemCard