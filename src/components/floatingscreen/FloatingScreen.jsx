import React, { useEffect, useRef, useState } from "react";

import custumstyle from "./FloatingScreen.module.css";
import { current } from "@reduxjs/toolkit";

const floatingpic = [
  { pic: "public/picc/93b99990a7fa61d6.webp" },
  { pic: "public/picc/4083fb320870abd3.webp" },
  { pic: "public/picc/8661a556057d9c00.webp" },
  { pic: "public/picc/24888359deaa199c.webp" },
  { pic: "public/picc/c8f548688def283c.webp" },
];

const FloatingScreen = () => {
  const [currentpic, setcurrentpic] = useState(floatingpic[1].pic);

  // const changepic = (a) => {
  //   setTimeout(() => {}, 1500);
  // };

  useEffect(() => {
    let num = 0;
    setInterval(() => {
      console.log("chek");
      setcurrentpic(floatingpic[num].pic);

      if (num == 4) {
        num = 0;
      } else {
        num++;
      }
    }, 1900);
  }, []);

  return (
    <div className={`bg-white mt-3 `}>
      <img src={currentpic} alt="floating pic" style={{ width: "100vw" }} />
      {/* <span className={`float-start ${custumstyle.sidebutton}`}>
        <img
          src="https://img.icons8.com/?size=48&id=19037&format=png"
          className="mt-4"
          alt=""
        />
      </span>
      <span className={` ${custumstyle.sidebutton} ${custumstyle.endd}`}>
        <img
          src="https://img.icons8.com/?size=48&id=19037&format=png"
          alt=""
          className={`mt-4 ${custumstyle.rightarrow}`}
        />
      </span> */}
    </div>
  );
};

export default FloatingScreen;
