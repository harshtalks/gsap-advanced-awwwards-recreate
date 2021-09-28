import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">Menu</div>
            <ul className="nav-links">
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Be My Bestie</NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <div className="nav-label">Contact</div>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Email</li>
                <li>
                  <NavLink to="/spotify">My Spotify</NavLink>
                </li>
                <li>
                  <NavLink to="/gitbhub">Github</NavLink>
                </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Reach ME</li>
                <li>Pareek Nivas</li>
                <li>Ghatol Banswara, 327023</li>
                <li>India</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Call Me</li>
                <li>+91-9660687185</li>
                <li>+91-8005762427</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Other stuffs</li>
                <li>Instagram</li>
                <li>ClubHouse</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
