import { useEffect, useState } from "react";
import Covered from "../Shared/Covered/Covered";
import shop from "../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Foodcard from "../Shared/FoodCard/Foodcard";
import { useParams } from "react-router-dom";

const OurShop = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const categies = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  console.log(category);
  const initialIndex = categies.indexOf(category);
  const [tabIndex, setTabIndex] = useState(0);
  // initialIndex === -1 ? setTabIndex(0) : setTabIndex(initialIndex);
  // initialIndex ? console.log("hello") : console.log("Gello");
  // console.log(initialIndex);
  const dessert = data.filter((item) => item.category === "dessert");
  const soup = data.filter((item) => item.category === "soup");
  const salad = data.filter((item) => item.category === "salad");
  const pizza = data.filter((item) => item.category === "pizza");
  const drinks = data.filter((item) => item.category === "drinks");
  // console.log(offered);

  return (
    <div>
      <div className="-mt-40">
        <Covered
          heading={"OUr Shop"}
          img={shop}
          description={"Would you like to tyr a dish?"}
        ></Covered>
      </div>

      <div className="mt-16 mb-16">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drink</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center max-w-[1650px] mx-auto px-4">
              {salad.map((singleData, index) => (
                <Foodcard singleData={singleData} key={index}></Foodcard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center max-w-[1650px] mx-auto px-4">
              {pizza.map((singleData, index) => (
                <Foodcard singleData={singleData} key={index}></Foodcard>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center max-w-[1650px] mx-auto px-4">
              {soup.map((singleData, index) => (
                <Foodcard singleData={singleData} key={index}></Foodcard>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center max-w-[1650px] mx-auto px-4">
              {dessert.map((singleData, index) => (
                <Foodcard singleData={singleData} key={index}></Foodcard>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center max-w-[1650px] mx-auto px-4">
              {drinks.map((singleData, index) => (
                <Foodcard singleData={singleData} key={index}></Foodcard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
