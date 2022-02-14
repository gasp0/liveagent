import React from "react";
import Typing from "./Typing";
import read from "./read.svg";
import "./Message.scss";

const Message = ({ key, who, face, text }) => {
  //chat is different for agent and for customer
  const typing = () => {
    if (who === "agent") {
      return (
        <div className={"msgBlock " + who}>
          <img className="face" src={face} alt="agent" />
          <div className="agentInner">{text ? <p>{text}</p> : <Typing />}</div>
        </div>
      );
    } else {
      return (
        <div className={"msgBlock " + who}>
          <div className="customerInner">
            <p>{text ? text : <Typing />}</p>
            {who === "customer" && (
              <img src={read} className="seen" alt="seen" />
            )}
          </div>
        </div>
      );
    }
  };

  return <div className="msg">{typing()}</div>;
};

export default Message;
