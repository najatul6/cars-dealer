import { motion } from "framer-motion";
import useProduct from "../../Hooks/useProduct";
import ProductsCard from "./ProductsCard";

const ProductSection = () => {
  const [products] = useProduct();

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 place-items-center gap-6 py-5">
      {products?.map((product, index) => (
        <motion.div
          key={product?._id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="w-full"
        >
          <ProductsCard item={product} />
        </motion.div>
      ))}
    </div>
  );
};

export default ProductSection;
