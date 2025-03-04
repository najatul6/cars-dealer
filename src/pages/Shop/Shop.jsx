import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useShopItems from "../../Hooks/useShopItems";

const Shop = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [shopItems, isLoading,] = useShopItems();

  const activeCategory = category || "popular";

  useEffect(() => {
    if (!category) {
      navigate(`/shop/popular`, { replace: true });
    }
  }, [category, navigate]);

  const handleTabChange = (newCategory) => {
    navigate(`/shop/${newCategory}`, { replace: true });
  };

  const normalizedCategory = activeCategory.toLowerCase();

  // ✅ Filter products based on the updated active category
  const filteredProducts =
    activeCategory === "popular"
      ? shopItems.filter((product) => product.isHotDeal === true)
      :  shopItems.filter(
        (product) => product.category.toLowerCase() === normalizedCategory
      );
  return (
    <div className="flex justify-center items-center text-center min-h-screen text-7xl">Shop</div>
  )
}

export default Shop