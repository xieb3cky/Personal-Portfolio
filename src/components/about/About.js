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
                            Hi there! 👋 I have background in digital advertisting and accounting.
                            I am skilled in full-stack development, project management, and client relationship building.
                            My passion is utilizing technology to help others solve problems and improve workflow.  <span className='learn-more-about'>Learn more below ! 👇</span>
                        </p>
                        <a href="https://drive.google.com/file/d/1G0WBIt7hBDwy4TQvuzrmaqfXWlWwA8wb/view" className="btn" target="_blank" rel="noreferrer" >Download Resume </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
