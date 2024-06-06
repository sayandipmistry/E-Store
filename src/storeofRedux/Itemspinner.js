import { createSlice } from "@reduxjs/toolkit";

const itemspinner = createSlice({
  name: "itemloader",
  initialState: false,
  reducers: {
    onlymethod: (state, { payload }) => {
      return (state = payload);
    },
  },
});

const itemspinneraction = itemspinner.actions;
export { itemspinner, itemspinneraction };
