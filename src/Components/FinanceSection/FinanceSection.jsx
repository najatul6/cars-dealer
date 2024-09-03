import { priceplan } from "../../utils/priceplan"
import FinanceCard from "./FinanceCard"

const FinanceSection = () => {
  return (
    <div>
        {
            priceplan?.map((items,idx)=><FinanceCard key={idx} item={items}/>)
        }
    </div>
  )
}

export default FinanceSection