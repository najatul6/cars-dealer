import CarSearchSection from "../../Components/CarSearchSection/CarSearchSection";
import SecondSlider from "../../Components/SecondSlider/SecondSlider";
import SeriesSection from "../../Components/SeriesSection/SeriesSection";
import ServiceSection from "../../Components/ServiceSeciton/ServiceSection";
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
      <div>
        <ServiceSection/>
      </div>
    </div>
  );
};

export default Home;
