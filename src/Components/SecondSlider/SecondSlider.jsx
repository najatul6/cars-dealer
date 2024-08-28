// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import SliderContent from "./SliderContent";
import { secondSlider } from "../../utils/slider";
import 'swiper/css/pagination';

const SecondSlider = () => {
  return (
    <div className="my-10">
      {" "}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
      >
        {secondSlider?.map((item) => (
          <SwiperSlide key={item?.id}>
           <SliderContent item={item}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SecondSlider