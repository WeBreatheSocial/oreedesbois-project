import React from 'react'
import Projet from '../public/png/projet-1.png'
import Compass from '../public/svg/villa.svg'
import Image from 'next/image'
import p1 from '../public/png/gallery/1.png'
import p2 from '../public/png/gallery/2.png'
import p3 from '../public/png/gallery/3.png'
import p4 from '../public/png/gallery/4.png'
import p5 from '../public/png/gallery/5.png'
import p6 from '../public/png/gallery/6.png'
import p7 from '../public/png/gallery/7.png'
import p8 from '../public/png/gallery/8.png'
import p9 from '../public/png/gallery/9.png'
import p10 from '../public/png/gallery/10.png'
import ModalImage from "react-modal-image";
import { SRLWrapper } from "simple-react-lightbox";
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const villa = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12" id='villa'>
            <div className='py-16 flex flex-1 flex-col justify-center items-center space-y-6'> 
                <span className=''><Image src={Compass}alt=''/> </span>
            <h1 className='section-title my-5 '>VILLA TÉMOIN</h1>
                        <h4 className='section-subtitle my-5'> UNE IMMERSION DANS VOTRE FUTUR CHEZ-VOUS</h4>

            </div>
                <SRLWrapper>


              <Swiper
              
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      breakpoints={{
           320: {
      width: 320,
      slidesPerView: 1,
    },
    // when window width is >= 640px
    600: {
      width: 600,
      slidesPerView: 2,
    },
    // when window width is >= 768px
    1366: {
      width: 1366,
      slidesPerView: 5,
      spaceBetween: 20,
    },
  }}
      navigation
      loop={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><Image src={p1}alt='' className='shadow-img opacity-70 hover:opacity-100' srl_gallery_image="true"/></SwiperSlide>
      <SwiperSlide><Image src={p2}alt='' className='shadow-img opacity-70 hover:opacity-100'/></SwiperSlide>
      <SwiperSlide><Image src={p3}alt='' className='shadow-img opacity-70 hover:opacity-100'/></SwiperSlide>
      <SwiperSlide><Image src={p4}alt='' className='shadow-img opacity-70 hover:opacity-100'/></SwiperSlide>
      <SwiperSlide><Image src={p5}alt='' className='shadow-img opacity-70 hover:opacity-100'/></SwiperSlide>
      <SwiperSlide><Image src={p6}alt='' className='shadow-img opacity-70 hover:opacity-100'/></SwiperSlide>
      <SwiperSlide><Image src={p7}alt='' className=' shadow-img opacity-70 hover:opacity-100'/></SwiperSlide>
      <SwiperSlide><Image src={p8}alt='' className='shadow-img opacity-70 hover:opacity-100'/></SwiperSlide>
      <SwiperSlide><Image src={p9}alt='' className='shadow-img opacity-70 hover:opacity-100'/></SwiperSlide>
      <SwiperSlide><Image src={p10}alt='' className='shadow-img opacity-70 hover:opacity-100'/></SwiperSlide>
    </Swiper>
         </SRLWrapper>
         <div className='mb-20'></div>
            </div>
    )
}

export default villa
