import React from "react";
import { NavLink } from "react-router-dom";
import { MdNotificationsActive } from "react-icons/md";

const Newnotification = () => {
  return (
    <div className="col-3 bg-white p-0 text-center m-auto    ">
      <span className={`number rounded-circle  `}>0</span>
      <NavLink
        to="/new"
        style={({ isActive }) => ({
          textDecoration: "none",
          backgroundColor: "white",
          color: isActive ? "darkblue" : "rgb(28, 126, 306)",
        })}
      >
        <MdNotificationsActive style={{ backgroundColor: "white" }} />

        <div style={{ fontSize: "10px" }} className="bg-white">
          New
        </div>
      </NavLink>
    </div>
  );
};

export default Newnotification;
