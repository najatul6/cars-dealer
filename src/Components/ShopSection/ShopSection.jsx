import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
import ShopTab from "./ShopTab";
import { useState } from "react";
import { Link } from "react-router-dom";
import useCategory from "../../Hooks/useCategory";
import useShopItems from "../../Hooks/useShopItems";

const ShopSection = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [categories] = useCategory();
  const [shopItems]=useShopItems()
  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  };
  const sedansProducts = shopItems.filter(
    (product) => product?.category === "sedan"
  );
  const hatchbackProducts = shopItems.filter(
    (product) => product?.category === "hatchback"
  );
  const coupeProducts = shopItems.filter(
    (product) => product?.category === "coupe"
  );
  const stationWagonProducts = shopItems.filter(
    (product) => product?.category === "stationwagon"
  );
  const hotDealProducts = shopItems.filter(
    (product) => product?.isHotDeal === true
  );
  const slicesedan=sedansProducts.slice(0,3)
  const slicehatchback=hatchbackProducts.slice(0,3)
  const slicecoupe=coupeProducts.slice(0,3)
  const slicestationwagon=stationWagonProducts.slice(0,3)
  const slicehotdeal=hotDealProducts.slice(0,3)

  return (
    <div className="text-center">
      <Tabs selectedIndex={activeTabIndex} onSelect={(index) => handleTabClick(index)}>
  {/* Tab List */}
  <TabList className="flex space-x-4 justify-center">
    {categories?.map((item, index) => (
      <Tab
        key={item?._id}
        className={`px-4 py-2 cursor-pointer transition-colors duration-300 border-b-0 ${
          activeTabIndex === index
            ? "border-2 border-b-0 rounded-t-xl text-cyan-500 "
            : "border-b-0 text-white hover:text-cyan-500 "
        }`}
      >
        {item?.category}
      </Tab>
    ))}
  </TabList>

  <hr className="w-full mb-10 border-2 border-white" />

  {/* Tab Panels (Dynamically Generated) */}
  {categories?.map((item) => (
    <TabPanel key={item?._id}>
      <ShopTab
        items={
          item.category === "sedan"
            ? slicesedan
            : item.category === "hatchback"
            ? slicehatchback
            : item.category === "coupe"
            ? slicecoupe
            : item.category === "stationwagon"
            ? slicestationwagon
            : slicehotdeal
        }
      />
    </TabPanel>
  ))}
</Tabs>

      <button className="mt-10">
        <Link to="/shop" className="btn bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-full">
          View All Products
        </Link>
      </button>
    </div>
  );
};

export default ShopSection;
