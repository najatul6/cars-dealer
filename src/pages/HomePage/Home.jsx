import { FaPhone } from "react-icons/fa";
import CarSearchSection from "../../Components/CarSearchSection/CarSearchSection";
import OurTeam from "../../Components/OurTeam/OurTeam";
import ProductSection from "../../Components/ProductSection/ProductSection";
import SecondSlider from "../../Components/SecondSlider/SecondSlider";
import SeriesSection from "../../Components/SeriesSection/SeriesSection";
import ServiceSection from "../../Components/ServiceSeciton/ServiceSection";
import Title from "../../Components/shared/Title/Title";
import Slider from "../../Components/Slider/Slider";
import banner from "../../assets/image/sell-buy-car.jpg";

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
        <SecondSlider />
      </div>
      <div className="px-5 py-5">
        <Title text={"services"} />
        <ServiceSection />
      </div>
      <div className="py-5 bg-Dark-blue px-5">
        <Title text={"products"} />
        <ProductSection />
      </div>
      <div className="py-5 px-5">
        <Title text={"our team"} />
        <OurTeam />
      </div>
      <div className="py-5">
        <div
          className="py-20 bg-regal-blue bg-opacity-95 flex flex-col gap-6 justify-center items-center w-full bg-blend-multiply "
          style={{
            backgroundImage: `url(${banner})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2 className="text-6xl text-light-blue font-bold">
            Lets find your dream car.
          </h2>
          <button className="flex justify-center items-center gap-5 bg-Dark-blue px-6 py-5 text-white -skew-x-[25deg]">
            <FaPhone /> +8801773827414
          </button>
        </div>
      </div>
      <div className="py-5 px-5">
        <div role="tablist" className="tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Tab 1"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            Tab content 1
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Tab 2"
            defaultChecked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            Tab content 2
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Tab 3"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            Tab content 3
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
