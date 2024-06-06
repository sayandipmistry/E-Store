import React from "react";
import customstyle from "./Demopic.module.css";
import { NavLink } from "react-router-dom";

const Demopic = ({ children: c }) => {
  return (
    <div style={{ width: "50%" }}>
      <NavLink state={c} hrefLang="#come" to={`/itemshow/${c?.category}`}>
        <img src={c.image} className={`${customstyle.pic}`} alt="" />
        <p className={`${customstyle.tittleofpic}`}>{c.title}</p>
      </NavLink>
    </div>
  );
};

export default Demopic;
