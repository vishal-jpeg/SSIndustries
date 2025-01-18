import React, {  useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import AOS from "aos";
import "aos/dist/aos.css";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const Clients = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration
      once: true, // Only once animation
    });
  }, []);
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center" data-aos="fade-up">
          <h2 className='floating'> Our clients </h2>
        </div>
        <div className="row testimonials-row" data-aos="zoom-out">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            // When window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // When window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // When window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            // When window width is >= 768px
            768: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            // Default behavior for larger screens
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {props.data
            ? props.data.map((d, i) => (
                <SwiperSlide key={`${d.name}-${i}`} className="col-md-3">
                  <div className="testimonial">
                    <div className="testimonial-image feature-card">
                      {" "}
                      <img src={d.img} alt="clients_logo" className='zoom-in' />{" "}
                    </div>
                  </div>
                </SwiperSlide>
                
              ))
            : "loading"}
        </Swiper>
        </div> 
      </div>
    </div>
  );
};
