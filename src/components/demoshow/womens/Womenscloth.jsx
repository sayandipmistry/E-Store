import React, { useEffect, useState } from "react";
import Printer from "../printer/Printer";
import { useDispatch, useSelector } from "react-redux";
import actioncreatfun from "../../higherorder/Forapi";

const Womencloth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actioncreatfun("women's clothing"));
  }, []);

  const ans = useSelector((v) => v.dataitem.Womenclothing);

  // const [item, setitem] = useState([]);

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products/category/women's clothing")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((res) => {
  //       const finlaldata = res.slice(0, 4);
  //       setitem([...finlaldata]);
  //     });
  // }, []);

  return (
    <div className=" bg-white m-2     " style={{ width: "45%" }}>
      <h3 className=" text-center hedingofoption ">Women's Fashion</h3>
      <br />

      <Printer>{ans.slice(0, 4)}</Printer>
    </div>
  );
};

export default Womencloth;
