import React, { useState, useEffect } from "react";
import GOW from "./img/DownloadNavbar.jpg";
import "boxicons/css/boxicons.min.css";
import finalFantasy from './img/finalFantasy.webp';
import { Link } from "react-router-dom";
import Witcher from './img/Witcher.jpg';

const DownloadNavbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [bellActive, setBellActive] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const toggleBell = () => {
    setBellActive(!bellActive);
  };

  useEffect(() => {
    const updateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return (
    <header>
      <div className="progress">
        <div
          className="progress-bar"
          id="scroll-bar"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
      <div className="nav container">
        <Link to="/" className="logo">
          Game<span>Stores</span>
        </Link>
        <div className="nav-icons">
          <i
            className={`bx bx-bell bx-tada ${bellActive ? "active" : ""}`}
            id="bell-icon"
            onClick={toggleBell}
          >
            <span></span>
          </i>
          <i className="bx bxs-download"></i>
          <div
            className={`menu-icon ${menuActive ? "active move" : ""}`}
            onClick={toggleMenu}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
        <div className={`menu ${menuActive ? "active" : ""}`}>
          <img src={Witcher} alt="" />
          <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/">Trending</Link>
            <Link to="/">New Games</Link>
          </div>
        </div>
        <div className="notifications">
          <div className="notifications-box">
            <i className="bx bxs-check-circle"></i>
            <p>Congratulations, Your Game downloaded successfully.</p>
          </div>
          <div className="notifications-box box-color">
            <i className="bx bxs-x-circle"></i>
            <p>Could not apply changes</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DownloadNavbar;
