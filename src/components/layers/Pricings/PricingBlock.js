import React from "react";
import TryBtn from "../../elements/TryBtn";
import "./PricingBlock.scss";

const PricingBlock = ({ img, imgCl, title, desc, price }) => {
  const action = () => {
    alert("Waiting to route somewhere :)");
  };
  return (
    <div className="pricingBlock">
      <div className="prod">
        <div className="img">
          <img src={img} alt={title} className={imgCl} />
        </div>
        <h4>{title}</h4>
        <small>{desc}</small>
        <p className="price">{price}</p>
        <TryBtn cta={action} />
      </div>
    </div>
  );
};

export default PricingBlock;
