import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ServiceCard = ({ item }) => {
  const { icon: Icon, title, description, btnText } = item;
  return (
    <div className="border flex flex-col justify-center items-center gap-3 p-5">
      <Icon className="text-6xl lg:text-8xl text-white"/>
      <h3 className="text-2xl capitalize font-bold text-white">{title}</h3>
      <p className="text-xl text-center">{description}</p>
      <Link className="text-lg font-bold uppercase text-white">{btnText} &raquo;</Link>
    </div>
  );
};

ServiceCard.propTypes={
  item: PropTypes.any,
}

export default ServiceCard;
