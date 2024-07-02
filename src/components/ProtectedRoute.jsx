import React from "react";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ Log, Notlog }) => {
  const flag = useSelector((a) => a.log);

  if (flag) {
    return <>{Log}</>;
  } else {
    return <>{Notlog}</>;
  }
};

export default ProtectedRoute;
