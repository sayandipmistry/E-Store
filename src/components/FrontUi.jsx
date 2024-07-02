import React from "react";
import MainHeader from "./header/topheader/MainHeader";
import FloatingScreen from "./floatingscreen/FloatingScreen";
import { Outlet, useNavigate } from "react-router";
import Optionbar from "./header/option-bar/Optionbar";
import DemoShow from "./demoshow/DemoShow";
import Footer from "./footer/Footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginaction } from "../storeofRedux/Loginchek";

const FrontUi = () => {
  const logflag = useSelector((v) => v.log);
  const dis = useDispatch();
  const nav = useNavigate();
  return (
    <>
      <MainHeader>Search for Products, Brands and More</MainHeader>
      <Optionbar />
      {/* <FloatingScreen /> */}
      <Outlet />
      <DemoShow />
      <a href="#come">go to top</a>
      {logflag && (
        <button
          onClick={() => {
            dis(loginaction.makefalse());
            nav("/");
          }}
        >
          log out
        </button>
      )}
      <Footer />
    </>
  );
};
export default FrontUi;
