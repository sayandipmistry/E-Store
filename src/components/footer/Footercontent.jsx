import React from "react";
import { Link } from "react-router-dom";

const Footercontent = () => {
  return (
    <div className="">
      <h3>ONLINE SHOPPING</h3>

      <Link to="/itemshow/jewelery">jewelery</Link>
      <br />

      <Link to="/itemshow/electronics">electronics</Link>
      <br />
      <Link to="/itemshow/Grocery">Grocery</Link>
      <br />
      <Link to="/itemshow/Mobile">Mobile</Link>
      <br />
      <Link to="/itemshow/Watches">Watches</Link>
      <br />
      <Link to="/itemshow/Mobile">Headphone</Link>
      <br />
      <Link to="/itemshow/men's clothing">men's clothing</Link>
      <br />
      <Link to="/itemshow/women's clothing">women's clothing</Link>
    </div>
  );
};

export default Footercontent;
