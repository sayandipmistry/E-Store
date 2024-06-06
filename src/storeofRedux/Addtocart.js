import { createSlice } from "@reduxjs/toolkit";

const addtocart = createSlice({
  name: "addtocart",
  initialState: [],
  reducers: {
    addeditem: (state, { payload }) => {
      return [...state, payload];
    },
    removefromcart: (state, { payload }) => {
      return state.filter((value) => {
        return value != payload;
      });
    },
  },
});

const cartaction = addtocart.actions;
export { cartaction, addtocart };
