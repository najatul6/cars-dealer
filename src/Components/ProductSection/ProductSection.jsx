import { productData } from "../../utils/productData"
import ProductsCard from "./ProductsCard"

const ProductSection = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 place-items-center gap-6 py-5">
        {productData?.map(product=><ProductsCard key={product?.id} item={product}/>)}
    </div>
  )
}

export default ProductSection