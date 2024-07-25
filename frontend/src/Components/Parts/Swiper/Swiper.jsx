
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Swiper.css';
import { EffectCoverflow, Pagination ,Autoplay} from 'swiper/modules';
function SwiperSlides() {
  return (
    <Swiper
    effect={'coverflow'}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={'auto'}
    initialSlide={Math.floor(10 / 2)}
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier:1,
      slideShadows: true,
    }}
    pagination={true}
    autoplay={{
      delay: 1000,
      disableOnInteraction: false,
    }}
    modules={[EffectCoverflow, Pagination, Autoplay]}
    className="mySwiper"
  >
    <SwiperSlide>
    <img className='img-fluid '  src="https://img.freepik.com/free-photo/building-with-domes-turrets_1122-1137.jpg?ga=GA1.1.1070693569.1706463458&semt=ais_user"/>
    </SwiperSlide>
    <SwiperSlide>
    <img className='img-fluid ' src="https://img.freepik.com/free-photo/closeup-shot-male-standing-looking-giza-necropolis-egypt_181624-39408.jpg?t=st=1720886566~exp=1720890166~hmac=efdfcd99c10315c89bc87eb964c551d6ac2494709a2247cd6e1ff9be59319632&w=1060"/>
    </SwiperSlide>
    <SwiperSlide>
    <img className='img-fluid ' src="https://img.freepik.com/free-photo/closeup-shot-female-standing-front-medinet-habu-temple-egypt_181624-45877.jpg?ga=GA1.1.1070693569.1706463458&semt=ais_user"/>
    </SwiperSlide>
    <SwiperSlide>
    <img className='img-fluid ' src="https://img.freepik.com/free-photo/viewpoint-alabaster-mosque-blue-sky-cairo-egypt_181624-52492.jpg?ga=GA1.1.1070693569.1706463458&semt=ais_user"/>
    </SwiperSlide>
    <SwiperSlide>
    <img className='img-fluid' src="https://img.freepik.com/free-photo/big-ben-house-parliament-night-london-united-kingdom_268835-1396.jpg?ga=GA1.1.1070693569.1706463458&semt=ais_user"/>
    </SwiperSlide>
    <SwiperSlide>
    <img className='img-fluid ' src="https://img.freepik.com/free-photo/woman-standing-celsus-library-ephesus-ancient-city-izmir-turkey_335224-583.jpg?ga=GA1.1.1070693569.1706463458&semt=ais_user"/>
    </SwiperSlide>
    <SwiperSlide>
    <img  src="https://img.freepik.com/free-photo/young-man-walking-egyptian-temple_181624-44493.jpg?ga=GA1.1.1070693569.1706463458&semt=ais_user"/>
    </SwiperSlide>
    <SwiperSlide>
    <img className='img-fluid ' src="https://img.freepik.com/free-photo/woman-standing-theater-hierapolis-ancient-city-pamukkale-turkey_335224-619.jpg?ga=GA1.1.1070693569.1706463458&semt=ais_user"/>
    </SwiperSlide>
    <SwiperSlide>
    <img className='img-fluid ' src="https://img.freepik.com/free-photo/young-man-walking-towards-great-sphinx-giza_181624-51674.jpg?ga=GA1.1.1070693569.1706463458&semt=ais_user"/>
    </SwiperSlide>
   
    
    <SwiperSlide>
        <img className='img-fluid ' src="https://img.freepik.com/free-photo/beautiful-girl-sitting-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-837.jpg?t=st=1721906949~exp=1721910549~hmac=c653be786bb4848c80304d66051a91c4930c3fb68e33d96a022766690a559da1&w=1060"/>
    </SwiperSlide>
  </Swiper>
  )
}

export default SwiperSlides