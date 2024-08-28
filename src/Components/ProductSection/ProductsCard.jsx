import PropTypes from "prop-types";

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
      <button className="btn bg-regal-blue hover:bg-light-blue text-white outline-none border-none rounded-none font-bold">Buy Now</button>
      </div>
    </div>
  </div>
  )
}

ProductsCard.propTypes = {
    item: PropTypes.object.isRequired,
}

export default ProductsCard