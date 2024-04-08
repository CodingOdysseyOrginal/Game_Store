import React, { useState } from 'react';
import Witcher from './img/Witcher.jpg';
import 'boxicons/css/boxicons.min.css';

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
        <a href="index.html" className="logo">Game<span>Stores</span></a>
        <div className="nav-icons">
          <i className={`bx bx-bell bx-tada ${bellActive ? 'active' : ''}`} id="bell-icon" onClick={toggleBell}><span></span></i>
          <i className='bx bxs-download'></i>
          <div className={`menu-icon ${menuActive ? 'active move' : ''}`} onClick={toggleMenu}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
        <div className={`menu ${menuActive ? 'active' : ''}`}>
          <img src={Witcher} alt="" />
          <div className="navbar">
            <li><a href="index.html">Home</a></li>
            <li><a href="#trending">Trending</a></li>
            <li><a href="#new">New Games</a></li>
            <li><a href="#action">Action Games</a></li>
            <li><a href="#contact">Contact Us</a></li>
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
