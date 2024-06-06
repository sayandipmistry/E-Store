import React from "react";
import Footercontent from "./Footercontent";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="d-flex justify-content-evenly bg-white p-5 ">
          <Footercontent />
          <Footercontent />
          <Footercontent />
        </div>

        <div className="text-end  p-4 bg-white">
          © 2024 www.sayandip.com. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
