import React from "react";
import "./TryBtn.scss";

const TryBtn = ({ cta }) => {
  return (
    <button onClick={cta} className="tryBtn">
      Try it
    </button>
  );
};

export default TryBtn;
