import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

// import "./mirage/Server.js";
import { Provider } from "react-redux";
import mainstore from "./storeofRedux/Mainstore.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // </React.StrictMode>,
  // <App />
  <Provider store={mainstore}>
    <App />
  </Provider>
);
