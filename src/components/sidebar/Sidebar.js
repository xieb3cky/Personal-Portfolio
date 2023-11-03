import React from 'react';
import './Sidebar.css';
import { SlHome, SlUser, SlSocialLinkedin, SlSpeech, SlGrid, SlEmotsmile, SlBriefcase } from 'react-icons/sl';
import { TbCircleLetterB } from 'react-icons/tb';

export default function Sidebar() {
    return (
        <aside className="aside">
            <a href="#home" className="nav_logo">
                {/* <img src="" alt="" srcset="" /> */}
                <TbCircleLetterB />
            </a>
            <nav className="nav">
                <div className="nav_menu">
                    <ul className="nav_list">
                        <li className="nav_item">
                            <a href="#home" className="nav_link">
                                <SlHome />
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#About" className="nav_link">
                                <SlUser />
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#Experience" className="nav_link">
                                <SlBriefcase />
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#Projects" className="nav_link">
                                <SlGrid />
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#Socials" className="nav_link">
                                <SlSocialLinkedin />
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#FunFacts" className="nav_link">
                                <SlEmotsmile />
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#Contact" className="nav_link">
                                <SlSpeech />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="nav_footer">
                <span className="footer">
                    text
                </span>
            </div>
        </aside>

    )
}
