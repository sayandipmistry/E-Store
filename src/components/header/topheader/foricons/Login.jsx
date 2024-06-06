import React from "react";
import { NavLink } from "react-router-dom";
import { FaUserCheck } from "react-icons/fa";

const Login = () => {
  return (
    <div className="col-3 bg-white p-0 text-center  m-auto    ">
      <NavLink
        to="/login"
        style={({ isActive }) => ({
          textDecoration: isActive ? "underline" : "none",
          backgroundColor: "white",
          color: isActive ? "darkblue" : "rgb(28, 126, 306)",
        })}
      >
        <FaUserCheck style={{ backgroundColor: "white" }} />

        <div style={{ fontSize: "10px" }} className="bg-white">
          Log in
        </div>
      </NavLink>
    </div>
  );
};

export default Login;
