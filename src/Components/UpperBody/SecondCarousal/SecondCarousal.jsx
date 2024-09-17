import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SecondCarousalImage1 from '../../../Assets/SecondCarousalImage1.png'
import SecondCarousalImage2 from '../../../Assets/SecondCarousalImage2.png'
import SecondCarousalImage3 from '../../../Assets/SecondCarousalImage3.png'

import 'swiper/css';
import 'swiper/css/pagination';

import './SecondCarousal.css';

import { Pagination,Autoplay} from 'swiper/modules';

export default function SecondCarousal() {
  return (
    <><div className='carousal-outer-body'>
        <p>Our Medical Specialist</p>
        <div className='second-carousal'>
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
        <SwiperSlide><img src={SecondCarousalImage1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={SecondCarousalImage2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={SecondCarousalImage3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={SecondCarousalImage1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={SecondCarousalImage2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={SecondCarousalImage3} alt="" /></SwiperSlide>
      </Swiper>
    </div>
    </div>
    </>
  );
}