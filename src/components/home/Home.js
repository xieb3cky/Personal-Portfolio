import React from 'react';
import './Home.css';
import HomeSocials from './HomeSocials';

export default function Home() {
    return (
        <section className="home container" id="Home">
            <div className="intro">
                {/* <img src={ImageOfMe} alt="" className="home-img" /> */}
                <h1 className="home-name">Becky Xie</h1>
                <div className="animated-text">
                    <span className="home-title">Full-Stack Developer </span>
                </div>
                <HomeSocials />
                <a href="#About" className="learn-more btn">Learn More</a>
            </div>
        </section>
    )
}
