import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "jewelery",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ4XrkSe1ZW8_Xup6dlqMfeCoWB7rxvDoTXQ&s",
  },
  {
    name: "men's clothing",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUQqCid9hpr44WmvnjhWog6wlyqJ3j4gS9ow&s",
  },
  {
    name: "women's clothing ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCmvGF8B5ZFU4YG42McnvyoLtdPTZHpAccBw&s",
  },
  {
    name: "electronics",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqQDWiPCSLgaHmTPraBSti_SQ-R_ugqbMTqw&s",
  },
  {
    name: "Grocery",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxcRQSCi6E6U7-Fztzrv65z7eaTgDPGdOdQ&s",
  },

  {
    name: "Mobile",
    image:
      "https://rukminim2.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100",
  },

  {
    name: "Watches",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3sW-7EGOdqtGOxGradBoKkzZSNpHTdj-7oA&s",
  },
  {
    name: "Headphone",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6oy_PAqna93kgwajSJWO4uxsReEp_LCBxgA&s",
  },
];

const Option_image = createSlice({
  name: "option image",
  initialState,
});

export default Option_image;
