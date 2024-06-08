import React, { useState } from "react";

import customstyle from "./Loginform.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginaction } from "../../storeofRedux/Loginchek";
import { Bounce, toast } from "react-toastify";

const Loginform = () => {
  const changpath = useNavigate();
  const dispatch = useDispatch();

  const loginstatus = useSelector((res) => res.log);
  const [valuee, setvalue] = useState({ namm: "", pas: "" });

  const changehandeler = (e) => {
    setvalue((val) => {
      return { ...val, [e.target.name]: e.target.value };
    });
  };

  const loginchek = () => {
    if (loginstatus) {
      dispatch(loginaction.makefalse());
    } else {
      if (
        localStorage.getItem("name") == valuee.namm &&
        localStorage.getItem("password") == valuee.pas
      ) {
        toast.success("Thank you .", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        dispatch(loginaction.maketrue());
      } else {
        // toast.warn("wrong password try again");
        toast.error("invalid", {
          className: "toast-message",
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      }
    }
  };
  return (
    <div className={`${customstyle.container}`}>
      <div className={`w-75    p-5  ${customstyle.frm}`}>
        <h1 className="text-white">Login From</h1>
        <form>
          <table>
            <tbody>
              <br />
              <td>
                <tr className="p-4">
                  <input
                    type="text"
                    name="namm"
                    onChange={changehandeler}
                    placeholder="type name "
                    id=""
                  />
                </tr>
                <br />
                <tr>
                  <input
                    type="password"
                    onChange={changehandeler}
                    placeholder="password"
                    name="pas"
                    id=""
                  />
                </tr>
              </td>
            </tbody>
          </table>
          <br />

          <button
            onClick={() => {
              loginchek();
            }}
            type="button"
            className={loginstatus ? "btn btn-danger" : "btn btn-primary"}
          >
            {loginstatus ? "Logout" : "login"}
          </button>
          {/* <button type="button" className="btn btn-danger ms-1">
            Create new account
          </button> */}

          <button type="button" className="btn btn-warning ms-1">
            <NavLink style={{ textDecoration: "none" }} to={"/"}>
              {" "}
              go to home
            </NavLink>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Loginform;
