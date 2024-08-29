import CarSearchSection from "../../Components/CarSearchSection/CarSearchSection";
import OurTeam from "../../Components/OurTeam/OurTeam";
import ProductSection from "../../Components/ProductSection/ProductSection";
import SecondSlider from "../../Components/SecondSlider/SecondSlider";
import SeriesSection from "../../Components/SeriesSection/SeriesSection";
import ServiceSection from "../../Components/ServiceSeciton/ServiceSection";
import Title from "../../Components/shared/Title/Title";
import Slider from "../../Components/Slider/Slider";

const Home = () => {
  return (
    <div className="">
      <div className="relative mb-72">
        <Slider />
        <div className="bg-Dark-blue mx-auto w-11/12 absolute -bottom-[35%] left-0 right-0 z-10 shadow-2xl">
          <CarSearchSection />
        </div>
      </div>
      <div className="">
        <SeriesSection />
      </div>
      <div>
        <SecondSlider/>
      </div>
      <div className="px-5 py-5">
        <Title text={"services"}/>
        <ServiceSection/>
      </div>
      <div className="py-5 bg-Dark-blue px-5">
        <Title text={"products"}/>
        <ProductSection/>
      </div>
      <div className="py-5 px-5">
        <Title text={"our team"}/>
        <OurTeam/>
      </div>
    </div>
  );
};

export default Home;
