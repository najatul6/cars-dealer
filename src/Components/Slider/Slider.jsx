// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { sliders } from "../../utils/slider";

const Slider = () => {
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
            <img
              src={slider?.image}
              alt={slider?.title}
              className="w-full h-[731px] object-cover object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
