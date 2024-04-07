"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import styles from "./styles.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = ({ images }) => {
  return (
    <div className={`${styles.swiperContainer}`}>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={`${styles.mySwiper}`}
      >
        {images.map((image) => {
          return (
            <SwiperSlide className={`${styles.swiperSlide}`} key={image}>
              <img
                src={`${image}`}
                alt={`rent a car in baku `}
                className={`${styles.image}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
