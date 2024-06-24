import React, { useState } from "react";

import customStyle from "./Mainheader.module.css";
// import Littleicons from "../forlittleicons/Littleicons";
// import { NavLink } from "react-router-dom";
import Mybag from "./foricons/Mybag";
import Wishlist from "./foricons/Wishlist";
import Login from "./foricons/Login";
import Newnotification from "./foricons/Newnotification";
import { NavLink, useNavigate } from "react-router-dom";

// const forlittleicon = [
//   { iconpic: <ImHeart />, content: "Wistlist", notification: true },
//   { iconpic: <PiBagSimpleFill />, content: "My Bag", notification: true },
//   {
//     iconpic: <MdNotificationsActive />,
//     content: "New",
//     notification: true,
//   },
//   {
//     iconpic: <FaUserCheck />,
//     content: "User",
//     notification: false,
//   },
// ];

const MainHeader = () => {
  const changepath = useNavigate();
  const [data, setdata] = useState("");

  const showsearchoption = (e) => {
    setdata(e.target.value);
  };

  const searchby = (e) => {
    e.preventDefault();
    console.log(data);
    changepath(`/itemshow/${data}`);
  };
  // const logopic = require("/public/picc/online store application.png");
  // console.log(logopic);
  return (
    <div className={`   container-fluid bg-white p-1     `}>
      <div className={`row ${customStyle.firstheader}`}>
        <div className="col-3 d-none d-sm-block bg-white       ">
          {/* <h1>Sayandip</h1> */}
          <NavLink to={"/"}>
            <img
              src="public/picc/online store application.png"
              // src={logopic}
              // src={require("../../../assets/imgg/online store application.png")}
              width={160}
              height={50}
              alt=""
            />
          </NavLink>
        </div>
        <div className="col-8 col-sm-6  bg-white   ">
          <img
            src="/public/picc/download.png"
            alt="search"
            className="  float-start text-end      "
            style={{ height: "35px" }}
          />
          <form
            onSubmit={searchby}
            className=" float-end   "
            style={{ width: "87%" }}
          >
            <input
              value={data} // using two way data binding
              type="name"
              className={`form-control ${customStyle.searchbar}`}
              id="exampleInputEmail1"
              placeholder="Search for Products, Brands and More"
              title="type hear"
              onChange={(e) => {
                showsearchoption(e);
              }}
            />
          </form>
        </div>
        <div className="col-4 col-sm-3  bg-white    ">
          <div className="row">
            {/* {forlittleicon.map(({ iconpic, content, notification }, i) => {
              return (
                <Littleicons
                  iconpic={{
                    ...iconpic,
                    props: { style: { backgroundColor: "white" } },
                  }}
                  content={content}
                  notification={notification}
                  key={i}
                />
              );
            })} */}

            <Wishlist />

            <Mybag />

            <Newnotification />

            <Login />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
