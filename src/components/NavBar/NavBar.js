import React from "react";
import { Link } from "react-router-dom";
import SarajevoEventsLogo2 from "./SarajevoEventsLogo2.png";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <img src={SarajevoEventsLogo2} width="180px" />
        <div className="menu-items">
          <Link className="menu-item" to="/">
            Favourite Events
          </Link>
          <Link className="menu-item" to="/events">
            Events
          </Link>
          <Link className="menu-item" to="/about-us">
            About us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
