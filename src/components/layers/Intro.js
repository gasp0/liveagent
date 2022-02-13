import React from "react";
import ActionBtn from "../elements/ActionBtn";
import PlayBtn from "../elements/PlayBtn";
import Logos from "./Intro/Logos/Logos";
import Chat from "./Intro/Chat";
import CheckBoxes from "./Intro/Checkboxes";
import ActionBtns from "./Intro/ActionBtns";
import { Row, Col } from "react-bootstrap";
import "./Intro.scss";

const Intro = () => {
  return (
    <section className="Intro">
      <Row>
        <Col className="heading">
          <h1>
            Provide excellent
            <strong> customer </strong>
            service.
          </h1>
          <h3>
            Answer more tickets with <br /> all-in-one help desk software.
          </h3>
          <CheckBoxes />
          <ActionBtns>
            <ActionBtn text="Get Started  |  14 days free" />
            <PlayBtn />
          </ActionBtns>
          <Logos />
        </Col>
        <Col className="chatSection">
          <Chat />
        </Col>
      </Row>
    </section>
  );
};

export default Intro;
