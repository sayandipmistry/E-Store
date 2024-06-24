import React from "react";
import Electronics from "./electronics/Electronics";
import Jewellery from "./jewellery/Jewellery";
import Womencloth from "./womens/Womenscloth";
import Menscloth from "./mens/Menscloth";
import customstyle from "./DemoShow.module.css";
import { useSelector } from "react-redux";

const DemoShow = () => {
  return (
    <div className={`${customstyle.demoheader}`}>
      <Womencloth />
      <Jewellery />
      <Electronics />
      <Menscloth />
    </div>
  );
};

export default DemoShow;
