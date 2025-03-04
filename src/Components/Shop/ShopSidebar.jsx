import PropTypes from "prop-types";
import { motion } from "framer-motion";
import useCategory from "../../Hooks/useCategory";

const ShopSidebar = ({ category, setCategory }) => {
  const [categories] = useCategory();
  return (
    <div className="rounded-none lg:w-64 bg-background2 p-4 overflow-hidden">
      <h1 className="text-xl font-bold mb-4 text-center lg:text-left">
        Categories
      </h1>
      <hr className="hidden lg:block my-5" />

      {/* Desktop Grid */}
      <div className="lg:grid gap-4 bg-background2 rounded-md hidden">
        <button
          onClick={() => setCategory("popular")}
          className={`text-left px-4 py-2 text-lg rounded-md transition-colors hover:text-baseColor capitalize ${
            category === "popular"
              ? "text-baseColor font-bold border-b-2 border-baseColor" // Active styles
              : "bg-transparent text-white hover:font-bold" // Default styles
          }`}
        >
          Popular
        </button>
        {categories?.map((item,index) => (
          <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            ease: "easeOut",
            duration: 0.6,
            delay: index * 0.2,
          }}
          viewport={{ once: true, amount: 0.2 }}
            key={item?._id}
            onClick={() => setCategory(item?.category)}
            className={`text-left px-4 py-2 text-lg rounded-md transition-colors hover:text-baseColor capitalize ${
              category === item?.category
                ? "text-baseColor font-bold border-b-2 border-baseColor" // Active styles
                : "bg-transparent text-white hover:font-bold" // Default styles
            }`}
          >
            {item?.category}
          </motion.button>
        ))}
      </div>

      {/* Mobile Dropdown (Select) */}
      <div className="flex flex-col mt-4 lg:hidden">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 text-sm rounded-md bg-transparent active:bg-transparent focus:bg-gray-600 border border-baseColor text-baseColor"
        >
          <option value="popular">Popular</option>
          {categories.map((item) => (
            <option key={item?._id} value={item?.category}>
              {item?.category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

ShopSidebar.propTypes = {
  category: PropTypes.string,
  setCategory: PropTypes.func,
};

export default ShopSidebar;