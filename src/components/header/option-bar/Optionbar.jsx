import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Optionbar = () => {
  const images = useSelector((res) => res.listofoption);

  return (
    <div id="come" className="container-fluid mt-2  bg-white">
      <div className="row">
        <div className="col d-flex justify-content-around  ">
          {images.map((v, i) => {
            return (
              <NavLink
                className={"text-center "}
                key={i}
                to={`/itemshow/${v.name}`}
                style={({ isActive }) => ({
                  color: isActive ? "blue" : "rgb(7, 175, 241)",
                  textDecoration: isActive ? "underline" : "none",
                  fontWeight: isActive ? "900" : "100",
                })}
              >
                <img src={v.image} width={50} height={40} />
                <br />
                <div
                  style={{
                    fontSize: "12px",
                  }}
                  className="text-center "
                >
                  {v.name}
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Optionbar;
