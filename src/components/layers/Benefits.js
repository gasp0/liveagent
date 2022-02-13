import React from "react";
import ActionBtn from "../elements/ActionBtn";
import StatBlock from "./Benefits/StatBlock";
import { Row, Col } from "react-bootstrap";
import "./Benefits.scss";
import graph from "../../assets/img/graph.png";

const Benefits = () => {
  const revenue = {
    no: 30,
    unit: "%",
    title: "Generate more revenue",
    desc: "Create memorable customer experiences that boost revenue.",
  };
  const satisfaction = {
    no: 97,
    unit: "%",
    title: "Improve satisfaction",
    desc: "Delight your customers with lightning-fast responses.",
  };

  const customerValue = {
    no: 16,
    unit: "x",
    title: "Boost customer value",
    desc: "Make more sales by keeping your customers loyal to your brand.",
  };

  return (
    <section className="Benefits">
      <Row>
        <Col lg="6">
          <small>Pioneering software</small>
          <h2>Did you know?</h2>
          <p>
            Established in 2006, LiveAgent was the first solution on the market
            to offer live chat and help desk capabilities. As of 2021, LiveAgent
            is the best rated and most reviewed help desk solution on the
            market, serving over 150 million users and 40,000 businesses
            worldwide.
          </p>

          <img
            className="wowGraph img-fluid"
            src={graph}
            alt="Graph of success"
          ></img>
        </Col>
        <Col lg="6">
          <div className="productData">
            <StatBlock
              number={revenue.no}
              unit={revenue.unit}
              title={revenue.title}
              desc={revenue.desc}
            />

            <StatBlock
              number={satisfaction.no}
              unit={satisfaction.unit}
              title={satisfaction.title}
              desc={satisfaction.desc}
            />

            <StatBlock
              number={customerValue.no}
              unit={customerValue.unit}
              title={customerValue.title}
              desc={customerValue.desc}
            />
            <ActionBtn text="Make your business goals a reality" />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Benefits;
