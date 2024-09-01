import { Tab, Tabs, TabList, TabPanel,  } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { categories } from "../../utils/categories";
import { shopProducts } from "../../utils/shopProducts";
import ShopTab from "./ShopTab";

const ShopSection = () => {
  const sedansProducts= shopProducts.filter(product=>product?.category === "sedan")
  const hatchbackProducts=shopProducts.filter(product=>product?.category === "hatchback")
  const coupeProducts=shopProducts.filter(product=>product?.category === "coupe")
  const stationWagonProducts=shopProducts.filter(product=>product?.category === "stationwagon")
  const hotDealProducts=shopProducts.filter(product=>product?.isHotDeal === true)
  console.log(hotDealProducts);
  return (
    <div>
      <Tabs >
        <TabList>
          {
            categories?.map(item=><Tab key={item?.id}>{item?.category}</Tab>)
          }
          
        </TabList>
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

export default ShopSection;
