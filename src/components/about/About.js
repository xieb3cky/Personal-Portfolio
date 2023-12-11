import React from 'react';
import './About.css';
import ImageOfMe from "../../assets/me.jpg";

export default function About() {
    return (
        <section className="about container section" id="About">
            <h2 className="section-title">About Me</h2>
            <div className="about-container grid">
                <img src={ImageOfMe} alt="" className="about-img" />

                <div className="about-data grid">
                    <div className="about-info">
                        <p className="about-description">
                            Hello there! 👋 I'm a dynamic professional with a strong background in digital advertising and accounting.
                            As a graduate of the SpringBoard Software Engineering Program, I've seamlessly merged my skills in full-stack development, along with valuable experience in developing APIs, various programming languages, and frameworks.
                            My passion lies in utilizing technology to help others solve problems and enhance workflow efficiency.
                            Let's connect and explore how my diverse skill set can contribute to meaningful and innovative solutions! <span className='learn-more-about'>Learn more! 👇</span>
                        </p>
                        <a href="https://drive.google.com/file/d/1G0WBIt7hBDwy4TQvuzrmaqfXWlWwA8wb/view" className="btn" target="_blank" rel="noreferrer" >Download Resume </a>
                    </div>
                </div>
            </div>
        </section>
    )
}



