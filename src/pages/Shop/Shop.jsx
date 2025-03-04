import { useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import useShopItems from "../../Hooks/useShopItems";
import ShopTab from "../../Components/ShopSection/ShopTab";
import useCategory from "../../Hooks/useCategory";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Shop = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [categories, isLoading] = useCategory();
  const [shopItems] = useShopItems();

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="text-center p-6">
      <Tabs selectedIndex={activeTabIndex} onSelect={(index) => handleTabClick(index)}>
        <TabList className="flex overflow-x-auto space-x-4 justify-center p-2 border-b border-gray-600">
          {isLoading ? (
            [1, 2, 3, 4, 5].map((_, index) => (
              <Skeleton key={index} width={80} height={30} />
            ))
          ) : (
            categories?.map((item, index) => (
              <Tab
                key={item?._id}
                className={`px-6 py-2 cursor-pointer transition-colors duration-300 rounded-t-lg text-white border-b-2 border-transparent hover:border-cyan-500 hover:text-cyan-500 ${
                  activeTabIndex === index ? "border-cyan-500 text-cyan-500 font-bold" : ""
                }`}
              >
                {item?.category}
              </Tab>
            ))
          )}
        </TabList>
        <hr className="w-full mb-6 border-gray-600" />
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <Skeleton key={index} height={200} />
            ))}
          </div>
        ) : (
          categories?.map((category) => (
            <TabPanel key={category?._id}>
              <ShopTab items={shopItems.filter((product) => product?.category === category?.category)} />
            </TabPanel>
          ))
        )}
      </Tabs>
     
    </div>
  );
};

export default Shop;
