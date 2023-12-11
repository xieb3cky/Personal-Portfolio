import React from 'react';
import './tech.css';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Tech() {
    return (
        <section className="tech container section">
            <h2 className="section-title">Technologies</h2>
            <Swiper className="tech-container grid"
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                grabCursor={true}
                pagination={{ clickable: true }}
            >
                <SwiperSlide className="tech-category">
                    <h3 className="tech-title">Front-End</h3>
                    <div className="tech-item">React, JavaScript, HTML, CSS, TailwindCSS, Bootstrap
                    </div>
                </SwiperSlide>
                <SwiperSlide className="tech-category">
                    <h3 className="tech-title">Back-End</h3>
                    <div className="tech-item">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde officiis incidunt totam accusamus mollitia. Voluptatum, est, nesciunt alias et quae recusandae, unde eius earum in quis ipsum possimus nihil corporis!</div>
                </SwiperSlide>
                <SwiperSlide className="tech-category">
                    <h3 className="tech-title">Other</h3>
                    <div className="tech-item">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde officiis incidunt totam accusamus mollitia. Voluptatum, est, nesciunt alias et quae recusandae, unde eius earum in quis ipsum possimus nihil corporis!</div>
                </SwiperSlide>

            </Swiper>
        </section>
    )
}
