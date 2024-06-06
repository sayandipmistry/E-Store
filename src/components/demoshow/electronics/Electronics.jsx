import React, { useEffect, useState } from "react";
import Printer from "../printer/Printer";

const Electronics = () => {
  const [electronicsitem, seteletronicsitem] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        const finlaldata = res.slice(0, 4);
        seteletronicsitem([...finlaldata]);
      });
  }, []);

  return (
    <div className=" bg-white m-2    " style={{ width: "45%" }}>
      <h3 className=" text-center hedingofoption">Electronicics</h3>
      <br />

      <Printer>{electronicsitem}</Printer>
    </div>
  );
};

export default Electronics;
