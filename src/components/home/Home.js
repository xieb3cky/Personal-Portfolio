import React from 'react';
import './Home.css';
import ImageOfMe from "../../assets/avatar-1.svg";
export default function Home() {
    return (
        <section className="home-container">
            <div className="intro">
                <img src={ImageOfMe} alt="" className="home-img" />
                <h1 className="home-name">Becky Xie</h1>
                <span className="home-education">
                    I'm a Software Engineer!
                </span>

                <a href="#learn" className="learn-more btn">Learn More</a>
            </div>
        </section>
    )
}
