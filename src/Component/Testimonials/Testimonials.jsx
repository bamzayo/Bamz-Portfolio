import React from "react";
import "./testimonials.css";
import AVTR from "../../assets/AVTR1.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Testimonials = () => {
  return (
    <section id="testimonial">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      {/* <div className="container testimonial__container"> */}
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper container testimonial__container"
        spaceBetween={40}
        slidesPerView={1}
      >
        <SwiperSlide>
          <article className="testimonial">
            <div className="client__avatar">
              <img src={AVTR} alt="avata1" />
            </div>
            <h5>Ernest Achiver</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              ullam iure inventore, saepe exercitationem officia doloribus
              consequuntur deserunt sint error, rerum impedit odio nemo sequi
              magni maxime architecto dolores quam.
            </small>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="testimonial">
            <div className="client__avatar">
              <img src={AVTR} alt="avata1" />
            </div>
            <h5>Ernest Achiver</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              ullam iure inventore, saepe exercitationem officia doloribus
              consequuntur deserunt sint error, rerum impedit odio nemo sequi
              magni maxime architecto dolores quam.
            </small>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="testimonial">
            <div className="client__avatar">
              <img src={AVTR} alt="avata1" />
            </div>
            <h5>Ernest Achiver</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              ullam iure inventore, saepe exercitationem officia doloribus
              consequuntur deserunt sint error, rerum impedit odio nemo sequi
              magni maxime architecto dolores quam.
            </small>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="testimonial">
            <div className="client__avatar">
              <img src={AVTR} alt="avata1" />
            </div>
            <h5>Ernest Achiver</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              ullam iure inventore, saepe exercitationem officia doloribus
              consequuntur deserunt sint error, rerum impedit odio nemo sequi
              magni maxime architecto dolores quam.
            </small>
          </article>
        </SwiperSlide>
      </Swiper>
      {/* </div> */}
    </section>
  );
};

export default Testimonials;
