const ServiceCard = ({ item }) => {
  const { icon, title, description, btnText } = item;
  return (
    <div>
      <img src={icon} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button>{btnText}</button>
    </div>
  );
};

export default ServiceCard;
