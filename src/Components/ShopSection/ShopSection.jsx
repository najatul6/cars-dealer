import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { categories } from "../../utils/categories";

const ShopSection = () => {
  return (
    <div>
      <Tabs defaultIndex={item?.id} onSelect={item.id}>
        <TabList>
          {
            categories?.map(item=><Tab key={item?.id}>{item?.category}</Tab>)
          }
          
        </TabList>
        {/* <TabPanel>
          <OrderTab items={popularItem} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={offeredItem} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={saladItem} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizzaItem} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessertItem} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={soupItem} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinksItem} />
        </TabPanel> */}
      </Tabs>
    </div>
  );
};

export default ShopSection;
