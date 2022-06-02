import React from "react";
import "../../styles/styles.css";
import { MdLocationOn, MdDateRange } from "react-icons/md";
import { FaHeadSideMask } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";

const Covid = () => {
  return (
    <Container id="covid">
      <Row className="d-flex flex-column-reverse flex-md-row my-5">
        <Col className="d-flex flex-column gap-2">
            <h1 className="content-heading">What Is Covid-19?</h1>
            <p className="content-detail">
              Coronavirus disease 2019 (COVID-19) is a contagious disease caused
              by severe acute respiratory syndrome coronavirus 2 (SARS-Cov-2)
            </p>
            <ul>
              <li className="d-flex gap-2 my-3">
                <div className="content-list-icon">
                  <MdLocationOn size={24} />
                </div>
                <p className="content-list-text">
                  The first known case in Whuna, China
                </p>
              </li>
              <li className="d-flex gap-2 my-3">
                <div className="content-list-icon">
                  <MdDateRange size={24} />
                </div>
                <p className="content-list-text">
                  Was Identified in December 2019
                </p>
              </li>
              <li className="d-flex gap-2 my-3">
                <div className="content-list-icon">
                  <FaHeadSideMask size={24} />
                </div>
                <p className="content-list-text">Leading ongoing pandemic</p>
              </li>
            </ul>
        </Col>
        <Col>
          <div className="image-covid">
            <img
              className="content-img-1"
              src="/content-img-1.png"
              alt="content"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Covid;
