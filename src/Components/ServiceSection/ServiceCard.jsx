const ServiceCard = ({ item }) => {
  const { icon: Icon, title, description, btnText } = item;
  return (
    <div>
      <Icon />
      <h3>{title}</h3>
      <p>{description}</p>
      <button>{btnText}</button>
    </div>
  );
};

export default ServiceCard;
