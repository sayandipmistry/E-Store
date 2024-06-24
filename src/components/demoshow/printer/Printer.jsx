import React from "react";
import Demopic from "./Demopic";
import customstyle from "./Printer.module.css";

const Printer = ({ children }) => {
  if (children.length == 0) {
    return <>empty</>;
    // return (
    //   <div className={`${customstyle.parrent} d-grid`}>
    //     {children.map((v, i) => {
    //       return (
    //         <div key={i} className="d-flex justify-content-center ">
    //           <div className="d-flex justify-content-center">
    //             <div className="spinner-border" role="status">
    //               <span className="visually-hidden">Loading...</span>
    //             </div>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // );
  } else {
    return (
      <div className={`${customstyle.parrent} d-grid`}>
        {children.map((v, i) => {
          return (
            <div key={i} className="d-flex justify-content-center   ">
              <Demopic>{v}</Demopic>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Printer;
