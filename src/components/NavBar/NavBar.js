import React from "react";
import { Link } from "react-router-dom";
import SarajevoEventsLogo2 from "./SarajevoEventsLogo2.png";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <img src={SarajevoEventsLogo2} alt="logo" width="180px" />
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
          <div>
            <Link className="menu-item" to="/login">
              <strong>Login</strong>
            </Link>
            &nbsp;or&nbsp;
            <Link className="menu-item" to="/register">
              <strong>Register</strong>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
