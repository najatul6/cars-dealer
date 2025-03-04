import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
import ShopTab from "./ShopTab";
import { useState } from "react";
import { Link } from "react-router-dom";
import useCategory from "../../Hooks/useCategory";
import useProduct from "../../Hooks/useProduct";

const ShopSection = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [categories] = useCategory();
  const [products]=useProduct()
  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  };
  const sedansProducts = products.filter(
    (product) => product?.category === "sedan"
  );
  const hatchbackProducts = products.filter(
    (product) => product?.category === "hatchback"
  );
  const coupeProducts = products.filter(
    (product) => product?.category === "coupe"
  );
  const stationWagonProducts = products.filter(
    (product) => product?.category === "stationwagon"
  );
  const hotDealProducts = products.filter(
    (product) => product?.isHotDeal === true
  );
  return (
    <div className="text-center">
      <Tabs selectedIndex={activeTabIndex} onSelect={(index) => handleTabClick(index)}>
        <TabList className="flex space-x-4 justify-center">
          {categories?.map((item,index) => (
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
          <hr className="w-full mb-10 border-2 border-white"/>
        <TabPanel>
          <ShopTab items={hotDealProducts} />
        </TabPanel>
        <TabPanel>
          <ShopTab items={sedansProducts} />
        </TabPanel>
        <TabPanel>
          <ShopTab items={hatchbackProducts} />
        </TabPanel>
        <TabPanel>
          <ShopTab items={coupeProducts} />
        </TabPanel>
        <TabPanel>
          <ShopTab items={stationWagonProducts} />
        </TabPanel>
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
