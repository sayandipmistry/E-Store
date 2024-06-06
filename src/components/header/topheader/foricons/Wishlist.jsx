import React from "react";
import { NavLink } from "react-router-dom";
import { ImHeart } from "react-icons/im";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const wishlistitem = useSelector((res) => res.wish);
  return (
    <div className="col-3 bg-white p-0 text-center m-auto    ">
      <span className={` number rounded-circle   `}>{wishlistitem.length}</span>
      <NavLink
        to="/wishlist"
        style={({ isActive }) => ({
          textDecoration: "none",
          backgroundColor: "white",
          color: isActive ? "darkblue" : "rgb(28, 126, 306)",
        })}
      >
        <ImHeart style={{ backgroundColor: "white" }} />

        <div style={{ fontSize: "10px" }} className="bg-white">
          Wishlist
        </div>
      </NavLink>
    </div>
  );
};

export default Wishlist;
