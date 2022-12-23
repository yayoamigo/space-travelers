import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../styling/planet.png';

const Nav = () => (
  <nav className="nav-bar">
    <div className="header">
      <img className="logo" src={Logo} alt="Logo" />
      <div className="nav-title" id="nav">Space Travelers Hub</div>
    </div>
    <ul className="nav-links">
      <li className="nav-link"><NavLink to="/">Rockets</NavLink></li>
      <li className="nav-link"><NavLink to="/missions">Missions</NavLink></li>
      <div className="vertical-line">|</div>
      <li className="nav-link"><NavLink to="/myprofile">My Profile</NavLink></li>
    </ul>
  </nav>
);

export default Nav;
