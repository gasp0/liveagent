import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./StatBlock.scss";
import { useRef } from "react";
import useOnScreen from "../../elements/useOnScreen";
import CountUp from "react-countup";

const StatBlock = ({ number, title, desc, unit }) => {
  // when counter enters viewpoint
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  // counter animation
  // Selector

  return (
    <div className="statBlock">
      <Container>
        <Row>
          <Col xl="4" lg="6" md="6" sm="6" className="numberBlock">
            <h4 className="number" ref={ref}>
              {isVisible && (
                <CountUp
                  start={0}
                  end={number}
                  duration={2}
                  decimals={0}
                  suffix={unit}
                  delay={0}
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              )}
            </h4>
          </Col>

          <Col className="textBlock">
            <h3>{title}</h3>
            <p className="desc">{desc}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StatBlock;
