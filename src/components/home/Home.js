import React from 'react';
import './Home.css';
import HomeSocials from './HomeSocials';
import ImageOfMe from "../../assets/me.jpg";

export default function Home() {
    return (
        <section className="home container" id="Home">
            <div className="intro">
                <img src={ImageOfMe} alt="" className="home-img" />
                <h1 className="home-name">Becky Xie</h1>
                <div className="home-education">
                    Software Engineer
                </div>
                <HomeSocials />
                <a href="#About" className="learn-more btn">Learn More</a>
            </div>
        </section>
    )
}
