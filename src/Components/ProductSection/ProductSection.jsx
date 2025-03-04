import useProduct from "../../Hooks/useProduct"
import ProductsCard from "./ProductsCard"

const ProductSection = () => {
 const [products]=useProduct()
  
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 place-items-center gap-6 py-5">
        {products?.map(product=><ProductsCard key={product?._id} item={product}/>)}
    </div>
  )
}

export default ProductSection