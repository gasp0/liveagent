import React from "react";
import "./ActionBtn.scss";

const ActionBtn = ({ text }) => {
  const action = () => {
    alert("Waiting to route somewhere :)");
  };
  return (
    <button className=" btnOrange" onClick={action}>
      {text}
    </button>
  );
};

export default ActionBtn;
