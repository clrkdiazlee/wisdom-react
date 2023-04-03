import {Swiper, SwiperSlide} from "swiper";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverFlow, Pagniation, Navigation } from 'swiper';

import data from './data.json';


function Carousel() {
    return(
        <div className='container'>
            <h1>Carousel</h1>
            <Swiper
                effect={ 'coverflow'}
                grabCursor={ true }
                centeredSLides={ true }
                loop={ true }
                slidesPerView={ 'auto' }
                coverflowEffect = {
                    {
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }
                }
                className='swiper_container'
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Carousel;