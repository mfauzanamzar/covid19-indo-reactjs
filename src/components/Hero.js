import React from "react";
import { FiSearch } from "react-icons/fi";
import { Container, Row, Col } from "react-bootstrap";

import "../styles/styles.css";
import Case from "./Case";

const Hero = () => {
  return (
    <div className=" py-3 ">
      <Container fluid="lg" className="px-5">
        <Row>
          <div className="d-flex flex-column-reverse flex-md-row justify-content-between gap-5">
            <Col className="d-flex flex-column justify-content-center text-center text-md-start">
              <h1 className="title">
                Let's Fight <span className="blue-title">Covid</span> Together
              </h1>
              <p>
                Save the world through your concern to wear the mask and get
                vaccinated. This world is in your hand
              </p>
              {/* <div className="hero-searchbar">
                <form>
                  <input
                    className="search-input"
                    type="text"
                    placeholder="Search.."
                    name="search"
                  />
                  <button className="search-button" type="submit">
                    <FiSearch size={20} />
                  </button>
                </form>
              </div> */}
              <Case/>
            </Col>
            <Col className="d-flex justify-content-center d-none d-md-block" >
                <img  className="hero-img"  src="/banner-img.png" alt="banner" />
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
