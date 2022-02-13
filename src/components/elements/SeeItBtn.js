import React from "react";
import "./SeeItBtn.scss";
import play from "../../assets/img/play.svg";

const ActionBtn = ({ text }) => {
  const action = (e) => {
    e.preventDefault();
    alert("Waiting to route somewhere :)");
  };
  return (
    <a href="#" className="seeIt" onClick={action}>
      <img src={play} alt="play" /> See It In Action
    </a>
  );
};

export default ActionBtn;
