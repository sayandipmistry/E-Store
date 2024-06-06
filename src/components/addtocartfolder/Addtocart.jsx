import React, { useEffect, useState } from "react";

import customstyle from "./Addtocart.module.css";

import { useDispatch, useSelector } from "react-redux";
import { wishaction } from "../../storeofRedux/Wishlist";
import { BsFillBagHeartFill } from "react-icons/bs";
import { cartaction } from "../../storeofRedux/Addtocart";
import { NavLink } from "react-router-dom";
import { object } from "yup";

const Addtocart = () => {
  const wishitem = useSelector((res) => res.wish);
  const idofcartarray = useSelector((res) => res.aboutcart);

  const dispatch = useDispatch();
  const [cartarray, setcartarray] = useState([]);
  const [cartdetails, setcartdetails] = useState({});

  useEffect(() => {
    idofcartarray.map((v) => {
      fetch(`https://fakestoreapi.com/products/${v}`)
        .then((res) => res.json())
        .then((res) => {
          setcartarray((a) => {
            return [...a, res];
          });
          setcartdetails((pre) => {
            return { ...pre, [res.id]: 1 };
          });
        })
        .catch((err) => console.log(err));
    });
  }, []);

  let [totalitem, settotalitem] = useState(0);
  let [totalprice, settotalprice] = useState(0);

  useEffect(() => {
    var sum = 0;
    var price = 0;
    cartarray.forEach((v, i) => {
      sum += Number(cartdetails[`${v.id}`]);

      price += v.price * Number(cartdetails[`${v.id}`]);
      settotalitem(sum);
      settotalprice(price);
    });
  }, [cartdetails]);

  return (
    <div className="d-flex flex-nowarp ">
      <div className="w-75">
        {cartarray.length > 0 ? (
          <div className="w-100 bg-white ">
            <h3 className="text-center m-3 p-2 w-100 bg-white text-primary  ">
              Bag {<BsFillBagHeartFill style={{ fontSize: "35px" }} />} List
            </h3>
            {cartarray.map((c, i) => {
              var delprice = c.price + 50;
              return (
                <div
                  key={i}
                  className="bg-white m-3 d-flex w-100 h-100   flex-warp rounded-3 p-2  "
                >
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

                  <div className="mt-4 ms-5 me-3  ">
                    {c.title}
                    <br />
                    <br />
                    <span className="bg-success  "> {c?.rating?.rate}⭐</span>
                    <p style={{ fontSize: "8px" }}>
                      {c.description.slice(0, 180)}
                    </p>
                    <h3>
                      Price:{" "}
                      <del style={{ color: "red" }}>{delprice.toFixed(2)}</del>
                      <span style={{ color: "green" }}> {c.price}</span>
                      <span style={{ fontSize: "17px", color: "blue" }}>
                        {" "}
                        {((c.price * 100) / delprice).toFixed(2)}% off
                      </span>
                    </h3>
                    <h6>
                      Count : <span>{c?.rating?.count}</span>
                    </h6>
                    {/* <div className="d-grid gap-2">
                      {idofcartarray.includes(c.id) ? (
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
                          className="btn btn-secondary  w-75 m-auto"
                          type="button"
                          disabled
                          style={{ cursor: "no-drop" }}
                        >
                          removed from bag
                        </button>
                      )}
                    </div> */}

                    <div className="mt-2 d-flex ">
                      <div className="bg-info  "> Quantity:</div>
                      <select
                        name={c.id}
                        className="bg-info"
                        onChange={(event) => {
                          if (event.target.value == 0) {
                            dispatch(cartaction.removefromcart(c.id));
                          }
                          setcartdetails((pre) => {
                            return {
                              ...pre,
                              [event.target.name]: event.target.value,
                            };
                          });
                        }}
                      >
                        <option value={1} selected>
                          1
                        </option>

                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={0} className="bg-danger text-white">
                          remove from bag
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div
            style={{ color: "blue" }}
            className="bg-white  text-center m-3 p-2 "
          >
            Your bag {<BsFillBagHeartFill style={{ fontSize: "35px" }} />} is
            Empty
          </div>
        )}
      </div>
      {cartarray.length > 0 ? (
        <div style={{ height: "250px" }} className=" w-25 bg-info m-3">
          <h3 className="text-center">Cart Details</h3>
          <div className="">
            <span>Total Item:</span>
            <span
              style={{ fontWeight: 600 }}
              className="bg-success text-white rounded-2"
            >
              {totalitem} Piece
            </span>
            <br />
            <span>Total Price:</span>
            <span
              style={{ fontWeight: 600 }}
              className="bg-success text-white rounded-2"
            >
              Rs. {totalprice.toFixed(2)}
            </span>
          </div>
          {/* Tottal Price:{totalprice.toFixed(2)} */}
          <br />
          <NavLink to={"/buy"}>
            <button className="btn btn-warning ms-4 " type="button">
              buy All
            </button>
          </NavLink>
        </div>
      ) : null}
    </div>
  );
};

export default Addtocart;
