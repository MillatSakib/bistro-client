import Heading from "../Shared/Heading/Heading";
import TestimonialCard from "./TestimonialCard";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Testimonial = () => {
  return (
    <div className="mb-32">
      <Heading
        heading={"testimonials"}
        subHeading={"What Our Client Say"}
      ></Heading>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide className="w-[300px]">
          <TestimonialCard></TestimonialCard>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard></TestimonialCard>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard></TestimonialCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
