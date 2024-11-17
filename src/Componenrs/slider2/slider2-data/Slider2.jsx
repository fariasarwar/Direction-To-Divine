import React from 'react'
import { Navigation, Pagination} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Slider2data from './Slider2data';
import { slider2 } from '../../../assets/Data/Data';

const Slider2 = () => {
  return (
    <>
      <div className='slider2-container'>
      <Swiper style={{height:'450px'}}
              // install Swiper modules
              modules={[Navigation, Pagination]}
              spaceBetween={0}
              slidesPerView={4}
              navigation
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {
                slider2.map((el)=>{
                  return(
                    <SwiperSlide><Slider2data s2={el}/></SwiperSlide>
                  );
                })
              } 
            </Swiper>
      </div>
    </>
  )
}

export default Slider2
