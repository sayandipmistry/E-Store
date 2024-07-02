import React from "react";
import FrontUi from "./components/FrontUi";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Itemshow from "./components/Itemshow/Itemshow";
import SellingUi from "./components/SellingUi";

import WishlistUi from "./components/wishlist/WishlistUi";
import Addtocart from "./components/addtocartfolder/Addtocart";
import Loginform from "./components/aboutlogin/Loginform";
import Protected from "./components/protected/Protected";
import Thankyou from "./components/thankyou/Thankyou";
import FloatingScreen from "./components/floatingscreen/FloatingScreen";
import ProtectedRoute from "./components/ProtectedRoute";

const routername = createBrowserRouter([
  {
    path: "/",
    element: <FrontUi />,
    children: [
      { path: "/", element: <FloatingScreen /> },
      { path: "/itemshow/:categori", element: <Itemshow /> },
      { path: "/wishlist", element: <WishlistUi /> },
      { path: "/cart", element: <Addtocart></Addtocart> },
    ],
  },

  // { path: "showitem/:Id/:catagori", element: <Showmainitem /> },

  {
    path: "/login",
    element: <ProtectedRoute Log={<FrontUi />} Notlog={<Loginform />} />,
  },

  {
    path: "/buy",
    element: <Protected Comp={Loginform}></Protected>,
  },

  { path: "/thankyou", element: <Thankyou /> },

  { path: "*", element: <Navigate to="/"></Navigate> },
]);

const App = () => {
  return <RouterProvider router={routername}></RouterProvider>;
};

export default App;
