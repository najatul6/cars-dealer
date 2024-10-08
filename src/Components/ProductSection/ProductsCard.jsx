import PropTypes from "prop-types";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const ProductsCard = ({ item }) => {
  const { name, price, rating, image } = item;
  return (
    <div className="card shadow-2xl rounded-none w-full">
      <figure>
        <img src={image} alt={name} className="h-[317px] w-full" />
      </figure>
      <div className="card-body items-center text-center text-white">

          <Rating style={{ maxWidth: 120 }} value={rating} readOnly />

        <h2 className="card-title ">{name}</h2>
        <p>{price}</p>
        <div className="card-actions">
          <button className="btn bg-regal-blue hover:bg-light-blue text-white outline-none border-none rounded-none font-bold">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

ProductsCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ProductsCard;
