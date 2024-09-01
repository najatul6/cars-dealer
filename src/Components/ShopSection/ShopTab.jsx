import ItemCard from "./ItemCard"


const ShopTab = ({items}) => {
  return (
    <div>
        {
            items?.map((item,idx)=><ItemCard key={idx} item={item}/>)
        }
    </div>
  )
}

export default ShopTab