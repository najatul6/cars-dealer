import {  useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import useShopItems from "../../Hooks/useShopItems";
import ShopTab from "../../Components/ShopSection/ShopTab";
import useCategory from "../../Hooks/useCategory";

const Shop = () => {
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
         
        </div>
  );
};

export default Shop;
