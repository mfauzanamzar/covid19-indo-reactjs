import React from "react";
import {
  FaHeadSideCough,
  FaThermometerQuarter,
  FaHeadSideVirus,
} from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";

const Symptomps = () => {
  return (
    <Container  id="symptomps">
      <Row className="d-flex flex-column flex-md-row">
        <Col>
          <div className="image-covid">
            <img
              className="content-img-2"
              src="/content-img-2.png"
              alt="content-2"
            />
          </div>
        </Col>
        <Col className="d-flex flex-column gap-2">
          <h1 className="content-heading">The Symptoms</h1>
          <p className="content-detail">
            There are so many Symptoms of COVID-19, but here is common symptoms.
            You must check up quickly if you have the symptoms
          </p>
          <div className="content-point-wrap">
            <div className="content-point">
              <FaHeadSideCough size={40} />
              <p>Cough</p>
            </div>
            <div className="content-point">
              <FaThermometerQuarter size={40} />
              <p>Fever</p>
            </div>
            <div className="content-point">
              <FaHeadSideVirus size={34} />
              <p>Headache</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Symptomps;
