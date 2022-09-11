import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <Link to="/">Favourite Events</Link>
        <Link to="/thingstodo">Events</Link>
        <Link to="/events">About us</Link>
        <Link to="/hotels">Contact us</Link>
      </div>
    </div>
  );
}

export default NavBar;
