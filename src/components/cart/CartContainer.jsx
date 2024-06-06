import React from "react";
import Cart from "./Cart";

const CartContainer = ({ children: c }) => {
  return (
    <div className="d-flex flex-wrap justify-content-around  ">
      {c.map((v, i) => {
        return <Cart key={i}>{v}</Cart>;
      })}
    </div>
  );
};

export default CartContainer;
