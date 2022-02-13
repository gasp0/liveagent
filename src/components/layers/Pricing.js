import React from "react";
import PricingBlock from "./Pricings/PricingBlock";
import PricingIntro from "./Pricings/PricingIntro";
import { Row, Col, Container } from "react-bootstrap";
import "./Pricing.scss";
import ticketIcon from "../../assets/img/ticket.svg";
import ticketChatIcon from "../../assets/img/ticketChat.svg";

const Pricing = () => {
  const ticket = {
    img: ticketIcon,
    imgCl: "ticket",
    name: "Ticket",
    desc: "For Small Bussinesses and Enterpreneurs",
    price: "15$ / mo",
  };
  const ticketChat = {
    img: ticketChatIcon,
    imgCl: "ticketChat",
    name: "Ticket + Chat",
    desc: "For Medium-sized Businesses and Profesional Agencies",
    price: "29$ / mo",
  };

  return (
    <section className="pricing">
      <Container>
        <Row>
          <Col lg="6" md="12">
            <PricingIntro />
          </Col>
          <Col lg="3" md="6" sm="6">
            <PricingBlock
              img={ticket.img}
              imgCl={ticket.imgCl}
              title={ticket.name}
              desc={ticket.desc}
              price={ticket.price}
            />
          </Col>
          <Col lg="3" md="6" sm="6">
            <PricingBlock
              img={ticketChat.img}
              imgCl={ticketChat.imgCl}
              title={ticketChat.name}
              desc={ticketChat.desc}
              price={ticketChat.price}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Pricing;
