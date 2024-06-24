import { createSlice } from "@reduxjs/toolkit";

var res;

fetch("https://fakestoreapi.com/products/1")
  .then((a) => a.json())
  .then((a) => (res = a));

const ItemData = createSlice({
  name: "itemData",
  initialState: {
    Womenclothing: [],
    Jewellery: [],
    Electronics: [],
    MensClothing: [],
  },
  reducers: {
    setWomenclothing: (st, { payload }) => {
      return { ...st, Womenclothing: [...payload] };
    },
    setjewelery: (st, { payload }) => {
      return { ...st, Jewellery: [...payload] };
    },
  },
});

export default ItemData;

const actionofsetdata = ItemData.actions;

export { actionofsetdata };
