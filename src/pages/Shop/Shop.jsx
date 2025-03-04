import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import useShopItems from "../../Hooks/useShopItems";
import ShopTab from "../../Components/ShopSection/ShopTab";
import ProductCardSkeleton from "../../Components/shared/ProductCardSkeleton/ProductCardSkeleton";
import ShopSidebar from "../../Components/Shop/ShopSidebar";
import useCategory from "../../Hooks/useCategory";

const Shop = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [shopItems, isLoading] = useShopItems();
  const [categories] = useCategory();

  // Default to "hotDeal" instead of "popular"
  const activeCategory = category || "hotDeal";

  useEffect(() => {
    if (!category) {
      navigate(`/shop/hotDeal`, { replace: true });
    }
  }, [category, navigate]);

  const handleTabChange = (index) => {
    const selectedCategory = index === 0 ? "hotDeal" : categories[index - 1]?.category;
    navigate(`/shop/${selectedCategory}`, { replace: true });
  };

  const normalizedCategory = activeCategory.toLowerCase();

  // ✅ Filter products based on the selected category
  const filteredProducts =
    activeCategory === "hotDeal"
      ? shopItems.filter((product) => product.isHotDeal === true)
      : shopItems.filter(
          (product) => product.category.toLowerCase() === normalizedCategory
        );

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full">
      {/* Sidebar */}
      <ShopSidebar category={activeCategory} setCategory={handleTabChange} className="w-full lg:w-64" />

      {/* Main Content */}
      <div className="flex-1 p-4">
        <Tabs selectedIndex={activeCategory === "hotDeal" ? 0 : categories.findIndex(c => c.category === activeCategory) + 1} onSelect={handleTabChange}>
          <TabList className="flex space-x-4 mb-4">
            <Tab className="px-4 py-2 cursor-pointer text-white border-b-2">
              Hot Deal
            </Tab>
            {categories.map((cat, index) => (
              <Tab key={index} className="px-4 py-2 cursor-pointer text-white border-b-2">
                {cat.category}
              </Tab>
            ))}
          </TabList>

          {/* Hot Deal Tab */}
          <TabPanel>
            <h2 className="text-xl font-bold mb-4">🔥 Hot Deals</h2>
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {Array.from({ length: 8 }).map((_, index) => (
                  <ProductCardSkeleton key={index} />
                ))}
              </div>
            ) : (
              <ShopTab items={filteredProducts} />
            )}
          </TabPanel>

          {/* Dynamic Category Tabs */}
          {categories.map((cat, index) => (
            <TabPanel key={index}>
              <h2 className="text-xl font-bold mb-4 capitalize">{cat.category} Zone</h2>
              {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {Array.from({ length: 8 }).map((_, index) => (
                    <ProductCardSkeleton key={index} />
                  ))}
                </div>
              ) : (
                <ShopTab items={shopItems.filter((product) => product.category === cat.category)} />
              )}
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;
