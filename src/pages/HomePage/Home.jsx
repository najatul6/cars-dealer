import CarSearchSection from "../../Components/CarSearchSection/CarSearchSection";
import Slider from "../../Components/Slider/Slider";

const Home = () => {
  return (
    <div className="">
      <div className="relative">
        <Slider />
        <div className="bg-Dark-blue mx-auto w-11/12 absolute -bottom-[35%] left-0 right-0 z-10">
          <CarSearchSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
