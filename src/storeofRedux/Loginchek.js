import { createSlice } from "@reduxjs/toolkit";

const loginchek = createSlice({
  name: "loginchek",
  initialState: false,
  reducers: {
    maketrue: (state) => {
      return (state = true);
    },
    makefalse: (state) => {
      return (state = false);
    },
  },
});

const loginaction = loginchek.actions;
export { loginaction, loginchek };
