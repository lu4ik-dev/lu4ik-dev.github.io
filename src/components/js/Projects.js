import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/effect-coverflow';
import '../css/projects.css';
const Projects = ({ slides }) => {
  return (
    <div className="bg-gradient-start vh-100">
      <div>
        <a className="btn btn-outline-light btn-lg px-4" href="/">
          BACK TO MAIN
        </a>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
        spaceBetween={50}
        slidesPerView={3}
        loop="true"
        centeredSlides="true"
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: -100,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        effect={'coverflow'}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}>
        {slides.map((slide) => (
          <div>
            <SwiperSlide key={slide.image}>
              <img src={slide.image} alt={slide.title} />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
