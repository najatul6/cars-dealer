import ItemCard from "./ItemCard"


const ShopTab = ({items}) => {
  return (
    <div className="grid grid-cols-3 gap-6">
        {
            items?.map((item,idx)=><ItemCard key={idx} item={item}/>)
        }
    </div>
  )
}

export default ShopTab