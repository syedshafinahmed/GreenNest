import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Pagination, Autoplay } from 'swiper/modules';
import '../Hero/Slider.css';
const Slider = ({ data }) => {
  return (
    <div className='mt-13'>
      <main>
        <div className='max-w-7xl h-[70vh] mx-auto pt-4 mb-30 px-5'>
          <Swiper className="slider" modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={4}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            {
              data.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="relative group hover:scale-103 transition">
                    <img className="h-96 w-full object-cover transition-all duration-500 mb-16 group-hover:brightness-50" src={slide.image} alt={slide.plantName} />
                    <div className="absolute inset-0 flex flex-col justify-center px-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white">
                      <p className="text-sm font-medium text-center">{slide.slogan}</p>
                    </div>
                  </div>
                  <div className="custom-pagination"></div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </main>
    </div>
  );
};

export default Slider;