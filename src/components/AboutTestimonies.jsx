import React from 'react'
import AboutSlider from './AboutSlider';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

const AboutTestimonies = () => {
  const testimonies = {
    images: "/images/testimonies/russel.svg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Russel Manito",
    role: "Front-End Developer"
  }


  return (
    <div className='bg-aboutBgWhite h-[75rem] w-full'>
      <div className='flex w-full justify-center items-center'>
        <Swiper
          spaceBetween={-900}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}

          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false
          }}

          
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >

          <div>
            {
              [...Array(10).keys()].map((id) => {
                return (
                  <SwiperSlide key={id} className="!w-[89rem] backdrop-blur-[0.15rem]">
                    <AboutSlider testimonies={testimonies} />
                  </SwiperSlide>
                ) 
              })
            }
          </div>

          <div className="slider-controler pt-16">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  )
}

export default AboutTestimonies