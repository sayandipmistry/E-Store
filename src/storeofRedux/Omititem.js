import { createSlice } from "@reduxjs/toolkit";

const omititem = createSlice({
  name: "omit",
  initialState: {},
  reducers: {
    omit: (state, { payload }) => {
      // console.log(payload);
      return (state = payload);
    },
  },
});

const omitactio = omititem.actions;
export { omitactio, omititem };
