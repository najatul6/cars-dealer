// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";
import SliderContent from "./SliderContent";

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
        {sliders?.map((slider) => (
          <SwiperSlide key={slider?.id}>
           <SliderContent slider={slider}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SecondSlider