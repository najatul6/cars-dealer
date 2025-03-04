import PropTypes from "prop-types";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import useRole from "../../Hooks/useRole";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProductsCard = ({ item }) => {
  const { name, price, rating, image } = item;
  const{user}=useAuth()
  const axiosSecure=useAxiosSecure()
  const navigate=useNavigate()
  const [userRole]=useRole()
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
      image: product.image,
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
    <div className="card shadow-2xl rounded-none w-full">
      <figure>
        <img src={image} alt={name} className="h-[317px] w-full" />
      </figure>
      <div className="card-body items-center text-center text-white">

          <Rating style={{ maxWidth: 120 }} value={rating} readOnly />

        <h2 className="card-title ">{name}</h2>
        <p>{price}</p>
        <div className="card-actions">
          <button onClick={()=>addToCart(item)} className="btn bg-regal-blue hover:bg-light-blue text-white outline-none border-none rounded-none font-bold">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

ProductsCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ProductsCard;
