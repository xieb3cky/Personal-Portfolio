import React, { useState } from 'react';
import WomenIcon from '../../assets/woman.png';
import './Sidebar.css';
import { SlMenu } from 'react-icons/sl';
// import { TbCircleLetterB } from 'react-icons/tb';
import { RiContactsBookLine, RiListIndefinite, RiBriefcaseLine, RiUser3Line, RiHomeSmile2Line } from "react-icons/ri";
// import { RiEmotionHappyLine } from "react-icons/ri";
export default function Sidebar() {
    const [menu, showMenu] = useState(false);
    return (
        <>
            <aside className={menu ? "aside show-menu" : "aside"}>
                <a href="#Home" className='nav-logo'><img src={WomenIcon} alt="woman icon home" /></a>
                <nav className="nav">
                    <div className="nav_menu">
                        <ul className="nav-list">
                            <li className="nav_item">
                                <a href="#Home" className="nav-link">
                                    <RiHomeSmile2Line />
                                </a>
                            </li>
                            <li className="nav_item">
                                <a href="#About" className="nav-link">
                                    <RiUser3Line />
                                </a>
                            </li>
                            <li className="nav_item">
                                <a href="#Experience" className="nav-link">
                                    <RiBriefcaseLine />
                                </a>
                            </li>
                            <li className="nav_item">
                                <a href="#Projects" className="nav-link">
                                    <RiListIndefinite />
                                </a>
                            </li>
                            {/* <li className="nav_item">
                                <a href="#FunFacts" className="nav-link">
                                    <RiEmotionHappyLine />
                                </a>
                            </li> */}
                            <li className="nav_item">
                                <a href="#Contact" className="nav-link">
                                    <RiContactsBookLine />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="nav_footer">
                    <span className="footer nav-link">
                    </span>
                </div>
            </aside >

            <div className={menu ? "nav-toggle nav-toggle-open" : "nav-toggle"} onClick={() => showMenu(!menu)}>
                <SlMenu />
            </div>

        </>
    )
}
