import React from "react";
import { ReactAtom } from "./ReactAtom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import '../../NavBarComponents.css'

function NavBarComponent() {
  return (
    <Navbar expand="lg" className="navBarPrime">
      <ReactAtom />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="aboutme">
            About me
          </Nav.Link>         
          <Nav.Link as={Link} to="projects">
            Projects
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBarComponent;
