import PropTypes from "prop-types";
import ItemCard from "./ItemCard"


const ShopTab = ({items}) => {
  return (
    <div className="grid grid-cols-3 gap-6">
        {
            items?.slice(0,3).map((item,idx)=><ItemCard key={idx} item={item}/>)
        }
    </div>
  )
}

ShopTab.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShopTab