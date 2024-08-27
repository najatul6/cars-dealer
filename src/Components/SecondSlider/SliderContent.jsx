import PropTypes from "prop-types";
const SliderContent = ({ item }) => {
  const { title, subtitle, description, image } = item;
  return (
    <div>
      <div className="bg-white shadow-2xl flex-col justify-start items-start">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <p>{description}</p>
      </div>
      <div className="w-full flex justify-center items-center">
        <img src={image} alt={title} />
        <p>{price}</p>
      </div>
    </div>
  );
};

SliderContent.propTypes={
    image: PropTypes.string.isRequired,
}

export default SliderContent;
