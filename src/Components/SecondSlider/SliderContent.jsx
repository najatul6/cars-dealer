import PropTypes from "prop-types";
const SliderContent = ({ item }) => {
  const { title, subtitle, description, image, price } = item;
  return (
    <div className="flex justify-center bg-regal-blue items-center px-5">
      <div className="bg-Dark-blue shadow-2xl flex flex-col justify-start items-start p-20 gap-5">
        <h1 className="text-4xl uppercase font-bold text-light-blue">
          {title}
        </h1>
        <h3 className="bg-regal-blue py-4 px-2 text-xl font-light uppercase text-white">
          {subtitle}
        </h3>
        <p className="text-justify">{description}</p>
      </div>
      <div className="w-full flex justify-center items-center relative">
        <img src={image} alt={title} className="w-full h-[600px]" />
        <div className="absolute z-10 right-8 top-[25%] felx justify-center items-center">
        <p className="text-xl -skew-x-[25deg] font-bold uppercase text-white py-3 px-2 bg-Dark-blue ">
          From {price}
        </p>
        </div>
      </div>
    </div>
  );
};

SliderContent.propTypes = {
  item: PropTypes.any.isRequired,
};

export default SliderContent;
