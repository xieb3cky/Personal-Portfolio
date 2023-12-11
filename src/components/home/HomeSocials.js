import React from 'react';
import { PiLinkedinLogoBold } from "react-icons/pi";
import { GrGithub } from "react-icons/gr";

export default function HomeSocials() {
    return (
        <div className='home-socials'>
            <a href="https://www.linkedin.com/in/becky-xie/" className="home-social-link linkedin" target="_blank"> <PiLinkedinLogoBold /></a>
            <a href="https://github.com/xieb3cky" className="home-social-link github" target="_blank"><GrGithub /></a>
        </div>
    )
}
