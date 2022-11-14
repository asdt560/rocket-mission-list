import React from 'react';
import { NavLink } from 'react-router-dom';

import planet from '../assets/images/planet.png';
import './Navbar.css';

const Navbar = () => (
  <header>
    <img src={planet} style={{ height: 50, width: 50 }} alt="planet" />
    <nav>
      <ul className="navbar-links">
        <li>
          <NavLink to="/rockets">Rockets</NavLink>
        </li>
        <li>
          <NavLink to="/missions">Missions</NavLink>
        </li>
        <li>
          <NavLink to="/my-profile">My Profile</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
