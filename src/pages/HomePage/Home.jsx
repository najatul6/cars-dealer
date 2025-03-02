import { FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import CarSearchSection from "../../Components/CarSearchSection/CarSearchSection";
import OurTeam from "../../Components/OurTeam/OurTeam";
import ProductSection from "../../Components/ProductSection/ProductSection";
import SecondSlider from "../../Components/SecondSlider/SecondSlider";
import SeriesSection from "../../Components/SeriesSection/SeriesSection";
import ServiceSection from "../../Components/ServiceSeciton/ServiceSection";
import Title from "../../Components/shared/Title/Title";
import Slider from "../../Components/Slider/Slider";
import banner from "../../assets/image/sell-buy-car.jpg";
import ShopSection from "../../Components/ShopSection/ShopSection";
import CardWizardSection from "../../Components/CarWizardSection/CardWizardSection";
import FinanceSection from "../../Components/FinanceSection/FinanceSection";
import TrustedSection from "../../Components/TrustedSection/TrustedSection";
import ReviewSection from "../../Components/ReviewSection/ReviewSection";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Home = () => {
  return (
    <div>
      <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="relative mb-72">
        <Slider />
        <div className="bg-Dark-blue mx-auto w-11/12 absolute -bottom-[35%] left-0 right-0 z-10 shadow-2xl">
          <CarSearchSection />
        </div>
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <SeriesSection />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <SecondSlider />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="px-5 py-5">
        <Title text={"services"} />
        <ServiceSection />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="py-5 bg-Dark-blue px-5">
        <Title text={"products"} />
        <ProductSection />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="py-5 px-5">
        <Title text={"our team"} />
        <OurTeam />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="py-5"
      >
        <div
          className="py-20 bg-regal-blue bg-opacity-95 flex flex-col gap-6 justify-center items-center w-full bg-blend-multiply"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <motion.h2 initial="hidden" animate="visible" variants={fadeInUp} className="text-6xl text-light-blue font-bold">
            Let&asop;s find your dream car.
          </motion.h2>
          <motion.button
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            whileHover={{ scale: 1.1 }}
            className="flex justify-center items-center gap-5 bg-Dark-blue px-6 py-5 text-white -skew-x-[25deg]"
          >
            <FaPhone /> +8801773827414
          </motion.button>
        </div>
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="py-5 px-5">
        <ShopSection />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="py-5 px-5">
        <CardWizardSection />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="py-5 px-5">
        <Title text={"Finance"} />
        <FinanceSection />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="py-5 px-5">
        <TrustedSection />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="py-5 px-5">
        <Title text={"Latest Reviews"} />
        <ReviewSection />
      </motion.div>
    </div>
  );
};

export default Home;
