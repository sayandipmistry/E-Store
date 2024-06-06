import { createSlice } from "@reduxjs/toolkit";

const wishlist = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addwishitem: (state, { payload }) => {
      return (state = [...state, payload]);
    },
    removewishitem: (state, { payload }) => {
      return state.filter((val) => {
        return val != payload;
      });
    },
  },
});

const wishaction = wishlist.actions;
export { wishaction, wishlist };
