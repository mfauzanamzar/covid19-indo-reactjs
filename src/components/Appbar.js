import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const Appbar = () => {
  return (
    <div>
      <Navbar variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img src="/logo.png" alt="logo" width={120} />
          </Navbar.Brand>
          <Nav className="m-auto">
            <Nav.Link href="#covid">Covid-19</Nav.Link>
            <Nav.Link href="#symptomps">Symptoms</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Appbar;
