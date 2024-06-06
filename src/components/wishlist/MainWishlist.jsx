import React from "react";

import customstyle from "../cart/Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { wishaction } from "../../storeofRedux/Wishlist";
import { cartaction } from "../../storeofRedux/Addtocart";

const MainWishlist = ({ children: c }) => {
  const cartlist = useSelector((res) => res.aboutcart);

  const wishlistitem = useSelector((res) => res.wish);
  const dispatch = useDispatch();

  return (
    <div className={`card m-2 ${customstyle.cartt} `}>
      <div
        className="card-top h-50 w-75 m-auto mt-3 "
        // to={`/showitem/${c?.id}/${c?.category}`}
      >
        <img src={c?.image} className=" h-75 w-100 m-auto mt-3 " alt="..." />

        <div className="card-body">
          <p className={`${customstyle.carttittle}`}>{c.title}</p>
        </div>
      </div>
      {/* <button className={`${customstyle.wishsign}`}>🤍</button> */}
      <div className="m-auto">
        <br />
        Price:<del style={{ color: "red" }}>{c?.rating?.count + c?.price}</del>
        <span style={{ color: "green" }}>{c?.price}</span>
        <br />
        Rating:{c?.rating?.rate}⭐
      </div>
      <div className="d-grid gap-2 mb-2   ">
        {cartlist.includes(c.id) ? (
          <button
            className="btn btn-danger  w-75 m-auto"
            type="button"
            onClick={() => {
              dispatch(cartaction.removefromcart(c.id));
            }}
          >
            remove from bag
          </button>
        ) : (
          <button
            className="btn btn-success  w-75 m-auto"
            type="button"
            onClick={() => {
              dispatch(cartaction.addeditem(c.id));
            }}
          >
            Add to bag
          </button>
        )}
        {wishlistitem.includes(c.id) ? (
          <button
            className="btn btn-danger  w-75 m-auto"
            type="button"
            onClick={() => {
              dispatch(wishaction.removewishitem(c.id));
            }}
          >
            remove from wish list
          </button>
        ) : (
          <button
            className="btn btn-secondary  w-75 m-auto"
            type="button"
            disabled
            style={{ cursor: "no-drop" }}
          >
            removed from wishlist
          </button>
        )}
      </div>
    </div>
  );
};

export default MainWishlist;
