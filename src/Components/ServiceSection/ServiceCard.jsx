
const ServiceCard = ({item}) => {
  return (
    <div>
        <img src={item.image} alt={item.title} />
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <button>{item.btnText}</button>
    </div>
  )
}

export default ServiceCard