import { productData } from "../../utils/productData"
import ProductsCard from "./ProductsCard"

const ProductSection = () => {
  return (
    <div>
        {productData?.map(product=><ProductsCard key={product?.id} item={product}/>)}
    </div>
  )
}

export default ProductSection