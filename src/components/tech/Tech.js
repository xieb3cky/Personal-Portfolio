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
                    <h3 className="tech-title">Languages</h3>
                    <div className="tech-item">HTML5 | JavaScript (ES6) | Python | Java | SQL
                    </div>
                </SwiperSlide>
                <SwiperSlide className="tech-category">
                    <h3 className="tech-title">Frameworks</h3>
                    <div className="tech-item">Express (Node.js) | Flask | React/React Native | Tailwind CSS
                    </div>
                </SwiperSlide>
                <SwiperSlide className="tech-category">
                    <h3 className="tech-title">Database</h3>
                    <div className="tech-item">
                        PostgreSQL
                    </div>
                </SwiperSlide>
                <SwiperSlide className="tech-category">
                    <h3 className="tech-title">Testing</h3>
                    <div className="tech-item">
                        Jest | Jasmine
                    </div>
                </SwiperSlide>
                <SwiperSlide className="tech-category">
                    <h3 className="tech-title">Other</h3>
                    <div className="tech-item">
                        BigTime | DoubleVerify | Google Campaign Manager 360 | Quickbooks
                        <div>Git | Github | Heroku </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}
