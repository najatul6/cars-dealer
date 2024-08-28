import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { title, description, image } = service;
  return (
    <div className="card shadow-2xl rounded-none">
      <figure>
        <img
          src={image}
          alt={title}
          className="h-[317px]"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{title}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <Link className="text-Dark-blue hover:text-light-blue font-bold">Learn More &rarr;</Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
