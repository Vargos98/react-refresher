import React from 'react';
import './navbar.css';
import Logo from './Logo.png';
import Bell from './bell.png';
import Profile from './profile.png'
import Camera from './camera.png'
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={Logo} alt="YouTube Logo" />
      </div>
      <div className="navbar__search">
        <input type="text" placeholder="Search" />
        <button className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="navbar__links">
        <a href="#">Home</a>
        <a href="#">Trending</a>
        <a href="#">Subscriptions</a>
      </div>
      <div className="navbar__account">
        <a href="#">
          <i className="fas fa-video"><img src={Camera} alt="" /></i>
        </a>
        <a href="#">
          <i className="fas fa-th"><img src="" alt="" /></i>
        </a>
        <a href="#">
          <i className="fas fa-bell"><img src={Bell} alt="" /></i>
        </a>
        <a href="#">
          <i className="fas fa-user-circle"><img src={Profile} alt="" /></i>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
