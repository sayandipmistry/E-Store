// import React, { useEffect, useState } from "react";

import customstyle from "./Showmainitem.module.css";

import { useDispatch, useSelector } from "react-redux";
import { wishaction } from "../../storeofRedux/Wishlist";
import { cartaction } from "../../storeofRedux/Addtocart";
import { NavLink } from "react-router-dom";
const Showmainitem = ({ children: c }) => {
  // const { Id, catagori } = useParams();

  // const [restitem, setrestitem] = useState([]);
  // const [mainitem, setmainitem] = useState({});

  // useEffect(() => {
  //   fetch(`https://fakestoreapi.com/products/${Id}`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((res) => {
  //       setmainitem({ ...res });
  //     })
  //     .catch((err) => console.log(err));

  //   fetch(`https://fakestoreapi.com/products/category/${catagori}`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((res) => {
  //       const restall = res.filter((v, i) => {
  //         return v.id != Id;
  //       });

  //       setrestitem([...restall]);
  //     })
  //     .catch((err) => console.log(err));
  // }, [Id]);

  const delprice = c.price + 50;

  const cartlist = useSelector((res) => res.aboutcart);

  const wishitem = useSelector((res) => res.wish);
  const dispatch = useDispatch();

  return (
    <div className="bg-white m-4 d-flex h-100   flex-warp rounded-3  ">
      {wishitem.includes(c.id) ? (
        <div
          onClick={() => {
            dispatch(wishaction.removewishitem(c.id));
          }}
          className={`${customstyle.love}`}
        >
          ❤
        </div>
      ) : (
        <div
          onClick={() => {
            dispatch(wishaction.addwishitem(c.id));
          }}
          className={`${customstyle.love}`}
        >
          🤍
        </div>
      )}
      <img
        src={c.image}
        alt=""
        className="m-4 w-25  d-inline-block  "
        height={300}
      />

      <div className="mt-4 ms-5 me-3 ">
        {c.title}
        <br />
        <br />
        <span className="bg-success  "> {c?.rating?.rate}⭐</span>
        <p style={{ fontSize: "8px" }}>{c.description}</p>
        <h3>
          Price: <del style={{ color: "red" }}>{delprice.toFixed(2)}</del>
          <span style={{ color: "green" }}> {c.price}</span>
          <span style={{ fontSize: "17px", color: "blue" }}>
            {" "}
            {((c.price * 100) / delprice).toFixed(2)}% off
          </span>
        </h3>
        <h6>
          Count : <span>{c?.rating?.count}</span>
        </h6>
        <div className="d-grid gap-2">
          {cartlist.includes(c.id) ? (
            <button
              className="btn btn-danger  w-100 m-auto"
              type="button"
              onClick={() => {
                dispatch(cartaction.removefromcart(c.id));
              }}
            >
              remove from bag
            </button>
          ) : (
            <button
              className="btn btn-success  w-100 m-auto"
              type="button"
              onClick={() => {
                dispatch(cartaction.addeditem(c.id));
              }}
            >
              Add to bag
            </button>
          )}
          <NavLink to={"/buy"}>
            <button className="btn btn-warning w-100" type="button">
              buy now
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Showmainitem;
