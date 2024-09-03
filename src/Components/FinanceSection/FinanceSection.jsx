import { priceplan } from "../../utils/priceplan"
import FinanceCard from "./FinanceCard"

const FinanceSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {
            priceplan?.map((items,idx)=><FinanceCard key={idx} item={items}/>)
        }
    </div>
  )
}

export default FinanceSection