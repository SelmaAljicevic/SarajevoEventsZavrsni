import React from "react";
import { NavLink } from "react-router-dom";

const sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <div>
        <NavLink className="link" to="/sports">
          {/* <img className="icons" src={AreaPersonalePic} /> */}
          Sports
        </NavLink>
        <NavLink className="link" to="/shopping">
          Shopping
        </NavLink>
      </div>
    </div>
  );
};

export default sidebar;
