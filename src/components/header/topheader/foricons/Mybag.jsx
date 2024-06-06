import React from "react";
import { NavLink } from "react-router-dom";
import { PiBagSimpleFill } from "react-icons/pi";
import { useSelector } from "react-redux";

const Mybag = () => {
  const cartitem = useSelector((res) => res.aboutcart);

  return (
    <div className="col-3 bg-white p-0 text-center m-auto    ">
      <span className={`number  rounded-circle  `}>{cartitem.length}</span>
      <NavLink
        to="/cart"
        style={({ isActive }) => ({
          textDecoration: "none",
          backgroundColor: "white",
          color: isActive ? "darkblue" : "rgb(28, 126, 306)",
        })}
      >
        <PiBagSimpleFill style={{ backgroundColor: "white" }} />

        <div style={{ fontSize: "10px" }} className="bg-white">
          My bag
        </div>
      </NavLink>
    </div>
  );
};

export default Mybag;
