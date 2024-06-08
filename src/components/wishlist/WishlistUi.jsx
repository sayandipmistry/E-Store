import React, { useEffect, useState } from "react";
import CartContainer from "../cart/CartContainer";
import { useSelector } from "react-redux";
import MainWishlist from "./MainWishlist";
import Wishcontainer from "./Wishcontainer";

const WishlistUi = () => {
  const wishlistitem = useSelector((res) => res.wish);
  const [wisharray, setwisharray] = useState([]);
  useEffect(() => {
    wishlistitem.map((v) => {
      fetch(`https://fakestoreapi.com/products/${v}`)
        .then((res) => res.json())
        .then((res) => {
          return setwisharray((a) => {
            // return [...a, res];
            const immutableupdate = [...a];
            return [...immutableupdate, res];
          });
        })
        .catch((err) => console.log(err));
    });
  }, []);

  return (
    <div className="bg-white m-3">
      <h2 className="text-center">
        {wisharray.length > 0 ? "❤your Wish list ❤" : "❤ Wish list is empty ❤"}
      </h2>

      <Wishcontainer>{wisharray}</Wishcontainer>
    </div>
  );
};

export default WishlistUi;
