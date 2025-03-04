import { motion } from "framer-motion";
import useCart from "../../../Hooks/useCart";
import { FaTrash } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";

const WishList = () => {
  const [cart, refetch, isLoading] = useCart();
  const axiosSecure = useAxiosSecure();
console.log(cart);
  // Remove item from wishlist
  const handleRemove = async (id) => {
    try {
      const res = await axiosSecure.delete(`/carts/${id}`);
      if (res.data.deletedCount > 0) {
        toast.success("Item removed from wishlist");
        refetch();
      }
    } catch (error) {
      toast.error("Failed to remove item");
    }
  };

  console.log(cart?.length);
  return (
    <div className="p-6 w-full">
      <h2 className="text-2xl font-bold text-white mb-5">My Wishlist</h2>
      {/* {isLoading ? (
        <p className="text-gray-400 text-center">Loading wishlist...</p>
      ) : cart.length === 0 ? (
        <p className="text-gray-400 text-center">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cart.map((item, index) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-gray-800 shadow-lg rounded-lg p-4 flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-40 w-full object-cover rounded-lg mb-3"
              />
              <h3 className="text-lg font-semibold text-white">{item.name}</h3>
              <p className="text-light-blue font-bold mb-3">${item.price}</p>

              <button
                onClick={() => handleRemove(item._id)}
                className="bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded flex items-center gap-2"
              >
                <FaTrash />
                Remove
              </button>
            </motion.div>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default WishList;
