import React, { useState } from "react";
import Witcher from "./img/Witcher.jpg";
import "boxicons/css/boxicons.min.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [bellActive, setBellActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const toggleBell = () => {
    setBellActive(!bellActive);
  };

  return (
    <header>
      <div className="progress">
        <div className="progress-bar" id="scroll-bar"></div>
      </div>
      <div className="nav container">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="logo"
        >
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
            <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
              Home
            </Link>
            <Link
              to="trending"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Trending
            </Link>
            <Link
              to="new"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              New Games
            </Link>
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

export default Navbar;
