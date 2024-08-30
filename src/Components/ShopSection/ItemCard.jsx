
const ItemCard = ({item}) => {
  const {image,name,price, rating,stoke,weight,colorOptions} = item
  return (
    <div>
      <div>
        <img src={image[0]} alt={name} />
      </div>
    </div>
  )
}

export default ItemCard