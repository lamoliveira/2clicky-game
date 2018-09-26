import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const Play = () => (
  <div>
    <Hero backgroundImage="https://i.imgur.com/knvH0T7.jpg">
      <h1>Click-Game</h1>
      <h2>You can choose what kind of image you wanna play</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Click to play Game!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
            Choose
          </p>
          <p>
            
          </p>
          <p>
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Play;
