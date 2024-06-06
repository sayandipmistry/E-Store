import React from "react";

import MainWishlist from "./MainWishlist";

const Wishcontainer = ({ children: c }) => {
  return (
    <div className="d-flex flex-wrap justify-content-around  ">
      {c.map((v, i) => {
        return <MainWishlist key={i}>{v}</MainWishlist>;
      })}
    </div>
  );
};

export default Wishcontainer;
