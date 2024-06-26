import { configureStore } from "@reduxjs/toolkit";
import Option_image from "./Option_image";
import { itemspinner } from "./Itemspinner";
import { omititem } from "./Omititem";
import { wishlist } from "./Wishlist";
import { addtocart } from "./Addtocart";
import { loginchek } from "./Loginchek";
import ItemData from "./ItemData";

const mainstore = configureStore({
  reducer: {
    listofoption: Option_image.reducer,
    itemspinnerDesider: itemspinner.reducer,
    foromit: omititem.reducer,
    wish: wishlist.reducer,
    aboutcart: addtocart.reducer,
    log: loginchek.reducer,
    dataitem: ItemData.reducer,
  },
});

export default mainstore;
