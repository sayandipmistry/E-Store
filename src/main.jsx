import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

// import "./mirage/Server.js";
import { Provider } from "react-redux";
import mainstore from "./storeofRedux/Mainstore.js";
import { ToastContainer, Zoom } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import "react-toastify/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // </React.StrictMode>,
  // <App />
  <Provider store={mainstore}>
    <App />
    {/* <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Zoom}
      // transition: Zoom,
    /> */}
    <ToastContainer bodyClassName="forStyletoasify" />
  </Provider>
);
