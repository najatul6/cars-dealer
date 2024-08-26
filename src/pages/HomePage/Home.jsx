import CarSearchSection from "../../Components/CarSearchSection/CarSearchSection";
import Slider from "../../Components/Slider/Slider";

const Home = () => {
  return (
    <div className="">
      <div>
        <Slider />
        <div className="bg-Dark-blue w-11/12">
          <CarSearchSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
