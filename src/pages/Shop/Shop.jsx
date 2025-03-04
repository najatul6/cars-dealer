import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useShopItems from "../../Hooks/useShopItems";
import { Tabs } from "react-tabs";
import { Helmet } from "react-helmet-async";
import ShopTab from "../../Components/ShopSection/ShopTab";
import ProductCardSkeleton from "../../Components/shared/ProductCardSkeleton/ProductCardSkeleton";
import ShopSidebar from "../../Components/Shop/ShopSidebar";

const Shop = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [shopItems, isLoading] = useShopItems();

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
    <Tabs value={activeCategory} onValueChange={handleTabChange} className="flex flex-col lg:flex-row min-h-screen w-full">
    {/* Helmet for title and meta tags Start here */}
    <Helmet>
      <title>Shop | E-commerce</title>
      <meta
        name="description"
        content="Discover the best deals on our e-commerce platform for buying and selling high-quality products."
      />
      <meta
        name="keywords"
        content="e-commerce, online shopping, buy and sell, best deals, online store"
      />
      <meta name="author" content="Your Brand Name" />

      {/* Open Graph for social media */}
      <meta property="og:title" content="Shop | E-commerce" />
      <meta
        property="og:description"
        content="Shop the latest products and enjoy exclusive discounts on our e-commerce platform."
      />
      <meta
        property="og:image"
        content="https://www.najatulislam.me/og-image.jpg"
      />
      <meta property="og:url" content="https://www.najatulislam.me/" />
      <meta property="og:type" content="website" />

      {/* Twitter Card for better previews on Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Shop | E-commerce" />
      <meta
        name="twitter:description"
        content="Shop the latest products and enjoy exclusive discounts on our e-commerce platform."
      />
      <meta
        name="twitter:image"
        content="https://www.najatulislam.me/twitter-image.jpg"
      />

      {/* Canonical URL */}
      <link rel="canonical" href="https://www.najatulislam.me/" />

      {/* Favicon */}
      <link
        rel="icon"
        href="https://www.najatulislam.me/favicon.ico"
        type="image/x-icon"
      />
    </Helmet>
    {/* Helmet for title and meta tags End here */}


    {/* Sidebar */}
    <ShopSidebar category={activeCategory} setCategory={handleTabChange} className="w-full lg:w-64" />

    {/* Main Content */}
    <div className="flex-1 p-4">
      <TabsContent value={activeCategory}>
        <h2 className="text-xl font-bold mb-4 capitalize">
          {activeCategory === "popular" ? "Popular Products" : `${activeCategory} Zone`}
        </h2>
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </div>
        ) : (
          <ShopTab item={filteredProducts} />
        )}
      </TabsContent>
    </div>
  </Tabs>
  )
}

export default Shop