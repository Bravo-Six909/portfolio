import React, { useState } from 'react';
import "./SideBar.css";
import { Link } from 'react-router-dom';
import About from "./About"

const SideBar = () => {

    let [navBar, setNavBar] = useState(false);

    const showSideBar = () => {
        setNavBar(!navBar);
    }

    return (
        <>
            <div className="navbar" >
                <Link to="#" className="menu-bars" onClick={showSideBar}>
                    <i className="fas fa-angle-double-right"></i>
                </Link>
            </div>
            <nav className={navBar ? "nav-menu active" : "nav-menu"} >
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars" onClick={showSideBar}>
                            <i className="fas fa-angle-double-left"></i>
                        </Link>
                    </li>
                    <li className="nav-text first-data" onClick={showSideBar}>
                        <Link to="#home">
                            <span className="navbar-span">Home</span>
                        </Link>
                    </li>
                    <li className="nav-text" onClick={showSideBar}>
                        <Link to='#about'>
                            <span className="navbar-span">About</span>
                        </Link>
                    </li>
                    <li className="nav-text" onClick={showSideBar}>
                        <Link to="#skills">
                            <span className="navbar-span">Skills</span>
                        </Link>
                    </li>
                    <li className="nav-text" onClick={showSideBar}>
                        <Link to="#projects">
                            <span className="navbar-span">Projects</span>
                        </Link>
                    </li>
                    <li className="nav-text" onClick={showSideBar}>
                        <Link to="#contact">
                            <span className="navbar-span">Contact-Me</span>
                        </Link>
                    </li>
                    <ul className="icon-list" onClick={showSideBar}>
                        <li>
                            <i className="fab fa-twitter"></i>
                        </li>
                        <li>
                            <i className="fab fa-facebook-square"></i>
                        </li>
                        <li>
                            <i className="fab fa-linkedin-in"></i>
                        </li>
                    </ul>
                </ul>
            </nav>
        </>
    )
}

export default SideBar;




