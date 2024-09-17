import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CarousalImage1 from '../../../Assets/CarousalImage1.png';
import CarousalImage2 from '../../../Assets/CarousalImage2.png';
import CarousalImage3 from '../../../Assets/CarousalImage3.png';

import 'swiper/css';
import 'swiper/css/pagination';

import './Carousal.css';

import { Pagination,Autoplay} from 'swiper/modules';

export default function Carousal() {
  return (
    <>
    <div className='carousal-one'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          }
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={CarousalImage1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={CarousalImage2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={CarousalImage1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={CarousalImage2} alt="" /></SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}