import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { loginaction } from "../../storeofRedux/Loginchek";

const Thankyou = () => {
  const dispatch = useDispatch();
  // const logstatus = useSelector((res) => res.log);
  const changepath = useNavigate();

  return (
    <div>
      <img
        style={{ width: "100vw", height: "80vh", backgroundSize: "contain" }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQG9td1mZzXNQMoM0O3n2eY-TJCu2yN_m2aw&s"
        alt=""
      />
      <div className="d-grid gap-2">
        <button
          className="btn btn-danger"
          type="button"
          onClick={() => {
            dispatch(loginaction.makefalse());
            changepath("/login");
          }}
        >
          {/* {logstatus ? " Log out your profile" : "Login youe profile again"} */}
          Log out your profile
        </button>

        <NavLink to="/">
          <button className="btn btn-success w-100 " type="button">
            Go Back to the home page.
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Thankyou;
