import React from "react";
import airbus from "./Airbus.svg";
import forbes from "./Forbes.svg";
import nascar from "./Nascar.svg";
import usc from "./USC.svg";
import "./Logos.scss";

const Logos = () => {
  return (
    <div className="logos">
      <p>Used by</p>
      <div className="logoImgs">
        <img src={airbus} alt={airbus} />
        <img src={forbes} alt={forbes} />
        <img src={nascar} alt={nascar} />
        <img src={usc} alt={usc} />
      </div>
    </div>
  );
};

export default Logos;
