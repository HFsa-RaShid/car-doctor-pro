"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Slider() {
  const slides = [1, 2, 3, 4];

  return (
    <div className="container mx-auto mt-22">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-[520px]" 
      >
        {slides.map((num) => (
          <SwiperSlide key={num} className="relative h-[520px]">
            <Image
              src={`/assets/images/homeCarousel/${num}.jpg`}
              alt={`Slide ${num}`}
              fill
              className="bg-contain rounded-lg"
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
