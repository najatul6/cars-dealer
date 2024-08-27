import PropTypes from "prop-types";
const SliderContent = ({ item }) => {
  const { title, subtitle, description, image,price } = item;
  return (
    <div className="flex bg-white justify-center items-center px-5">
      <div className="bg-white shadow-2xl flex flex-col justify-start items-start p-20 gap-5">
        <h1 className="text-4xl uppercase font-bold text-light-blue">{title}</h1>
        <h3 className="bg-Dark-blue py-4 px-2 text-xl font-light uppercase text-white">{subtitle}</h3>
        <p className="text-justify">{description}</p>
      </div>
      <div className="w-full flex justify-center items-center relative">
        <img src={image} alt={title} />
        <p className="absolute z-10 top-0 text-xl font-bold uppercase text-white py-3 px-2 bg-Dark-blue rounded-ss-full">From {price}</p>
      </div>
    </div>
  );
};

SliderContent.propTypes={
    item: PropTypes.any.isRequired,
}

export default SliderContent;
