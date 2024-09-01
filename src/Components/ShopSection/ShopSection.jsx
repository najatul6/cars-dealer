import { Tab, Tabs, TabList, TabPanel,  } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { categories } from "../../utils/categories";
import { shopProducts } from "../../utils/shopProducts";
import ItemCard from "./ItemCard";

const ShopSection = () => {
  const sedansProducts= shopProducts.filter(product=>product?.category === "sedan")
  console.log(sedansProducts);
  return (
    <div>
      <Tabs >
        <TabList>
          {
            categories?.map(item=><Tab key={item?.id}>{item?.category}</Tab>)
          }
          
        </TabList>
        <TabPanel>
          <ItemCard items={sedansProducts} />
        </TabPanel>
        
      </Tabs>
    </div>
  );
};

export default ShopSection;
