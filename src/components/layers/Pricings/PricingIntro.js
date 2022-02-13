import React from "react";
import ActionBtn from "../../elements/ActionBtn";
import "./PricingIntro.scss";

const PricingIntro = () => {
  return (
    <div className="PricingIntro">
      <small>Best Price</small>
      <h2>A fair knowledge base software</h2>
      <p>
        Creating your own knowledge center doesn’t have to be an expensive feat.
        LiveAgent offers multiple pricing plans that cater to all support needs.
        Get our standalone knowledge base software with the least expensive plan
        or take a look at other plans that offer additional features.
      </p>
      <ActionBtn text="Pricing" />
    </div>
  );
};

export default PricingIntro;
