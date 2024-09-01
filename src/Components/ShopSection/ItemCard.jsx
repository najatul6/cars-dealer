import { Rating } from "@smastrom/react-rating";
import PropTypes from "prop-types";

const ItemCard = ({ item }) => {
  const { images, name, price, rating, stock, weight, colorOptions, isOnSale } =
    item;
  // console.log(stoke);
  return (
    <div className="card shadow-2xl rounded-xl w-full">
      <figure>
        <img src={images[0]} alt={name} className="h-[317px] w-full" />
      </figure>
      <div className="card-body text-center text-white">
        <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
        <div className="flex flex-col justify-start items-start">
          <h2 className="card-title"> {name}</h2>
          <p>Price : {price}</p>
          <p>Weight : {weight}</p>
          <p>Stock : {stock}</p>
        </div>
        <div className="flex justify-start items-center gap-2">
          Color :{" "}
          {colorOptions.map((color, index) => (
            <div
              key={index}
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: color }}
              title={color}
            ></div>
          ))}
        </div>
        <div className="text-white w-full">
          <button
            disabled={!isOnSale}
            className={`${
               isOnSale ? "bg-regal-blue hover:bg-light-blue" : "bg-red-600 text-red-600"
            } btn w-full rounded-xl  text-white outline-none border-none font-bold`}
          >
            {isOnSale ? "Add to Cart" : "Out of stock"}
          </button>
        </div>
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  item: PropTypes.any.isRequired,
};

export default ItemCard;
