import React from "react";
import MainHeader from "./header/topheader/MainHeader";
import FloatingScreen from "./floatingscreen/FloatingScreen";
import { Outlet } from "react-router";
import Optionbar from "./header/option-bar/Optionbar";
import DemoShow from "./demoshow/DemoShow";
import Itemshow from "./Itemshow/Itemshow";

const SellingUi = () => {
  return (
    <>
      <MainHeader />
      <Optionbar />
      {/* <FloatingScreen /> */}
      <Outlet />
      <Itemshow />
      <DemoShow />
      <a href="#come">go to top</a>
    </>
  );
};

export default SellingUi;
