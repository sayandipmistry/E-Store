import React from "react";
import { Link, NavLink } from "react-router-dom";
import customStyle from "./Littleicons.module.css";

const Littleicons = ({ iconpic, content, notification }) => {
  // let { iconpic, content } = icon;

  return (
    <div className="col-3 bg-white p-0 text-center m-auto    ">
      {notification ? (
        <span className={`${customStyle.number} rounded-circle  `}>10</span>
      ) : null}
      <NavLink style={{ textDecoration: "none" }}>
        <div className="text-center bg-white  ">{iconpic}</div>

        <div style={{ fontSize: "10px" }} className="bg-white">
          {content}
        </div>
      </NavLink>
    </div>
  );
};

export default Littleicons;
