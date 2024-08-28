import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductsCard = ({item}) => {
    const {name,price,rating,image}=item;
  return (
    <div className="card shadow-2xl rounded-none">
    <figure>
      <img src={image} alt={name} className="h-[317px]" />
    </figure>
    <div className="card-body">
      <h2 className="card-title text-white">{name}</h2>
      <p>{price}</p>
      <p>{rating}</p>
      <div className="card-actions">
        <Link className="text-Dark-blue hover:text-light-blue font-bold">
          Learn More &rarr;
        </Link>
      </div>
    </div>
  </div>
  )
}

ProductsCard.propTypes = {
    item: PropTypes.object.isRequired,
}

export default ProductsCard