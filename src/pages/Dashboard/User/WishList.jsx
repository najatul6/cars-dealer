import { motion } from "framer-motion";
import useCart from "../../../Hooks/useCart";
import { FaTrash } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";

const WishList = () => {
  const [cart, refetch, isLoading] = useCart();
  const axiosSecure = useAxiosSecure();

  // Convert price to number and calculate total price
  const totalPrice =
    cart?.reduce((sum, item) => sum + (parseFloat(item.price) || 0), 0) || 0;

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

  return (
    <div className="w-full py-4">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold text-white ">My Wishlist</h2>
        {/* Total Price */}
        <div className=" flex justify-center items-center gap-6">
          <h3 className="text-xl font-bold text-white">
            Total Price:{" "}
            <span className="text-light-blue">${totalPrice.toFixed(2)}</span>
          </h3>
          <button disabled={cart?.length === 0} className="btn bg-regal-blue hover:bg-light-blue text-white outline-none border-none rounded-none font-bold">
            Buy Now
          </button>
        </div>
      </div>

      {isLoading ? (
        <p className="text-gray-400 text-center">Loading wishlist...</p>
      ) : cart?.length === 0 ? (
        <p className="text-gray-400 text-center">Your wishlist is empty.</p>
      ) : (
        <div className="overflow-x-auto">
          <motion.table
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full border border-gray-700 text-white"
          >
            <thead>
              <tr className="bg-gray-800 text-left">
                <th className="p-3">Image</th>
                <th className="p-3">Product</th>
                <th className="p-3">Price</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <motion.tr
                  key={item._id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="border-b border-gray-700"
                >
                  <td className="p-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 object-cover rounded"
                    />
                  </td>
                  <td className="p-3">{item.name}</td>
                  <td className="p-3 text-light-blue font-bold">
                    $ {item.price || "0.00"}
                  </td>
                  <td className="p-3 text-center flex justify-center">
                    <button
                      onClick={() => handleRemove(item._id)}
                      className="bg-red-600 hover:bg-red-500 text-white py-1 px-3 rounded flex items-center gap-2"
                    >
                      <FaTrash />
                      Remove
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </motion.table>
        </div>
      )}
    </div>
  );
};

export default WishList;
