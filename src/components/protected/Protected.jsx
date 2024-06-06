import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Loginform from "../aboutlogin/Loginform";
import Thankyou from "../thankyou/Thankyou";

const Protected = (props) => {
  const { Comp } = props;
  const changepath = useNavigate();

  const logstatus = useSelector((res) => res.log);

  if (logstatus) {
    return <Thankyou />;
  } else {
    return <Comp />;
  }
};

export default Protected;
