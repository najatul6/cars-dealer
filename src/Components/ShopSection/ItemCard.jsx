import { Rating } from "@smastrom/react-rating";
import PropTypes from "prop-types";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import useRole from "../../Hooks/useRole";
import { toast } from "react-toastify";

const ItemCard = ({ item }) => {
  const { images, name, price, rating, stock, weight, colorOptions, isOnSale } =
    item;
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const [userRole] = useRole();

    const addToCart = async (product) => {
        if (!user || !user?.email) {
          return navigate("/signin", { state: { from: location } });
        }
        if (userRole !== "user") {
          toast.error("Only customers can add products to cart");
          return navigate("/dashboard/overview", { state: { from: location } });
        }
        const cartItem = {
          itemId: product._id,
          email: user.email,
          name: product.name,
          price: product.price,
          image: product.images[0],
        };
        try {
          const { data } = await axiosSecure.post("/createCart", cartItem);
      
          if (data.insertedId) {
            toast.success("Product added to cart");
          } else {
            toast.info(data.message || "Product already in cart");
          }
        } catch (error) {
          console.error("Add to cart error:", error);
          toast.error("Failed to add product to cart");
        }
      };
  return (
    <div className="card shadow-2xl rounded-xl w-full">
      <figure>
        <img src={images[0]} alt={name} className="h-[317px] w-full" />
      </figure>
      <div className="card-body text-center text-white">
        <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
        <div className="flex flex-col justify-start items-start">
          <h2 className="card-title"> {name}</h2>
          <p>Price : {price}</p>
          <p>Weight : {weight}</p>
          <p>Stock : {stock}</p>
        </div>
        <div className="flex justify-start items-center gap-2">
          Color :{" "}
          {colorOptions.map((color, index) => (
            <div
              key={index}
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: color }}
              title={color}
            ></div>
          ))}
        </div>
        <div className="text-white w-full">
          <button
            disabled={!isOnSale}
            onClick={() => addToCart(item)}
            className={`${
               isOnSale ? "bg-regal-blue hover:bg-light-blue" : "bg-red-600 text-red-600"
            } btn w-full rounded-xl  text-white outline-none border-none font-bold`}
          >
            {isOnSale ? "Add to Cart" : "Out of stock"}
          </button>
        </div>
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  item: PropTypes.any.isRequired,
};

export default ItemCard;
