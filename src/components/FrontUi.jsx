import React from "react";
import MainHeader from "./header/topheader/MainHeader";
import FloatingScreen from "./floatingscreen/FloatingScreen";
import { Outlet } from "react-router";
import Optionbar from "./header/option-bar/Optionbar";
import DemoShow from "./demoshow/DemoShow";
import Footer from "./footer/Footer";

const FrontUi = () => {
  return (
    <>
      <MainHeader>Search for Products, Brands and More</MainHeader>
      <Optionbar />
      {/* <FloatingScreen /> */}
      <Outlet />
      <DemoShow />
      <a href="#come">go to top</a>
      <Footer />
    </>
  );
};

export default FrontUi;
