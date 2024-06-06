import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import Electronics from "../demoshow/electronics/Electronics";
import CartContainer from "../cart/CartContainer";

import { useDispatch, useSelector } from "react-redux";

import { itemspinneraction } from "../../storeofRedux/Itemspinner";
import Showmainitem from "../showmainitem/Showmainitem";
import { omitactio } from "../../storeofRedux/Omititem";

// const stockitem = [
//   "Jewellery",
//   "men's clothing",
//   "women's clothing",
//   "electronics",
// ];

const Itemshow = () => {
  const location = useLocation();
  const mainitem = location?.state;

  let { categori } = useParams();

  const [item, setitem] = useState([]);

  const desider = useSelector((a) => a.itemspinnerDesider);

  const dispatch = useDispatch();

  const omititem = useSelector((res) => res.foromit);

  useEffect(() => {
    dispatch(omitactio.omit(mainitem));
    dispatch(itemspinneraction.onlymethod(true));

    fetch(`https://fakestoreapi.com/products/category/${categori}`)
      // fetch(`https://fake-store-api.mock.beeceptor.com/api/products`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        dispatch(itemspinneraction.onlymethod(false));
        if (mainitem) {
          const exeptitem = res.filter((v) => {
            return v.id !== mainitem.id;
          });
          setitem([...exeptitem]);
        } else {
          setitem([...res]);
        }
      })
      .catch((err) => console.log(err));
  }, [categori, omititem, mainitem]);

  // const [range, setrange] = useState(0);

  // const ranggechange = (event) => {
  //   setrange(event.target.value);
  // };

  return (
    <>
      {desider ? (
        <div className="d-flex align-items-center bg-white h-75 m-2   ">
          <p className="ms-5 ">{item[0]?.category} items are Fetching...</p>
          <div
            className="spinner-border  ms-5   "
            role="status"
            aria-hidden="true"
          ></div>
          <div
            className="spinner-border  ms-5   "
            role="status"
            aria-hidden="true"
          ></div>
          <div
            className="spinner-border  ms-5   "
            role="status"
            aria-hidden="true"
          ></div>
        </div>
      ) : (
        <>
          {item.length > 0 ? (
            <div>
              {mainitem ? <Showmainitem>{mainitem}</Showmainitem> : null}

              {/* <div className="bg-white m-2">
                <label htmlFor="customRange1" className="form-label ">
                  Price range
                </label>
                <input
                  defaultValue={`${50}`}
                  onChange={() => {
                    ranggechange(e);
                  }}
                  type="range"
                  className="form-range"
                  id="customRange1"
                ></input>
                <div className="text-center text-danger  "> {range} %</div>
              </div> */}

              <CartContainer>{item}</CartContainer>
            </div>
          ) : (
            <h3 className="m-auto container mt-2  bg-white text-center accordion-collapse    ">
              Sorry all <span className="text-primary">{categori}</span>
              {categori[categori.length - 1] == "s" ? "" : "'s"} are out of
              stock right now... 😥😥😥
            </h3>
          )}
        </>
      )}
    </>
  );
};

export default Itemshow;
{
  /* <div>
        <CartContainer>{item}</CartContainer>
      </div>; */
}

{
  /* <div className="d-flex align-items-center bg-white h-75 m-2   ">
          <p className="ms-5 ">{item[0].category} items are Fetching...</p>
          <div
            className="spinner-border  ms-5   "
            role="status"
            aria-hidden="true"
          ></div>
          <div
            className="spinner-border  ms-5   "
            role="status"
            aria-hidden="true"
          ></div>
          <div
            className="spinner-border  ms-5   "
            role="status"
            aria-hidden="true"
          ></div>
        </div> */
}
