import React from 'react'
import { Navigation, Pagination} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Card from './cards/Card';
import data from '../../assets/Data/Data';

const Slider = () => {
  return (
    <>
      <div className='slider-container'>
      <Swiper style={{height:'428px'}}
              // install Swiper modules
              modules={[Navigation, Pagination]}
              spaceBetween={0}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {
                data.map((elm)=>{
                  return(
                    <SwiperSlide><Card data={elm}/></SwiperSlide>
                  );
                })
              } 
            </Swiper>
      </div>
    </>
  )
}

export default Slider
