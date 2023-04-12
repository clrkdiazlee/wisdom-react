import { useState, useRef, useEffect } from 'react';

// Data
import data from './data.json';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Mousewheel } from "swiper";

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const Test = () => {
    const carousel = useRef(null);
  return (
    <div>
      <h2 className="font-poppins text-4xl leading-8 font-semibold mb-12 text-slate-700">
        Main Category Name
      </h2>

      <Swiper
        spaceBetween={0}
        slidesPerView={"auto"}
        loop={true}
        direction={"horizontal"}
        mousewheel={true}
        modules={[Mousewheel]}
        speed={1200}
        grabCursor={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <div
            ref={carousel}
            className="carousel-container float-left relative flex overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0">
            {data.resources.map((resource, index) => {
              return (
              <SwiperSlide key={index} className='!w-auto'>  
                <div
                  className="carousel-item text-center relative w-40 h-80 snap-start 
                  flex-initial -skew-x-[20deg]
                  whitespace-nowrap hover:w-96 transition-all duration-300  ease-in-out overflow-hidden"
                > 
                {/* LINK */}
                  <a
                    href={resource.link}
                    className="block overflow-hidden w-96 h-80 object-cover"
                  >
                    {/* IMAGE */}
                    <img
                      src={resource.imageUrl || ''}
                      alt={resource.title}
                      className="skew-x-[20deg] scale-[1.5] w-full h-full object-cover"
                    />
                  </a>
                  
                  <a
                    href={resource.link}
                    className="group"
                  >
                    <div className='h-full w-full block absolute top-0 left-0 z-10
                    group-hover:!opacity-0 whitespace-normal text-left object-fit shadow-[inset_-79px_0px_74px_-35px_rgba(27,57,150,0.8)]'>
                      {/* SUB-CATEGORY NAME */}
                        <h1 className='w-80 h-40 block absolute bottom-20 -right-20 font-poppins font-bold text-white text-4xl break-words -rotate-[90deg] !align-text-bottom pt-[5.4rem]'>
                        {resource.title}</h1>  
                    </div>
                    
                    {/* TITLE */}
                    <div className='h-full w-96 block absolute top-0 left-0 
                    hover:w-full transition-opacity opacity-0 hover:opacity-100 bg-[#1B3996]/75 z-10'>
                      <h3 className="skew-x-[20deg] font-poppinslight font-semibold text-white py-5 px-3 mx-auto text-2xl">
                      {resource.title}
                      </h3>
                      <div className='max-w-96 max-h-60 break-normal whitespace-normal'>
                        <h3 className='max-w-80 max-h-60 skew-x-[20deg] font-poppinslight py-1 px-14 mx-auto text-white'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero nulla, euismod sed efficitur vitae, mollis in dolor. Proin sit amet tortor congue, ultrices nisi sit amet, suscipit odio. Proin ac turpis vitae dui dapibus varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        </h3>
                      </div>
                      
                    </div>
      
                  </a>
                </div>
              </SwiperSlide>  
              );
            })}
          </div>
      </Swiper>
    </div>
  );
};

export default Test