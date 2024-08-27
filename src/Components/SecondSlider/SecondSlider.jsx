// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";
import SliderContent from "./SliderContent";
import { secondSlider } from "../../utils/slider";

const SecondSlider = () => {
  return (
    <div className="h-[731px]">
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
        modules={[Autoplay]}
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