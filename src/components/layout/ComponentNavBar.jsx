import { ReactAtom } from "./ReactAtom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../../NavBarComponents.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import {useState} from 'react'


function NavBarComponent() {
const [expanded,setExpanded] = useState(false);

const closeMenu =()=>setExpanded(false)
  
  return (
    <Navbar expand="lg" className="navBarPrime" expanded={expanded} onToggle={(isExpanded)=>setExpanded(isExpanded)}>
      <ReactAtom />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto gap-5">
          <Nav.Link as={Link} to="aboutme" onClick={closeMenu}>
            <span className="linkNavBarText">About me🤖</span>
          </Nav.Link>
          <Nav.Link as={Link} to="projects"  onClick={closeMenu}>
            <span className="linkNavBarText">Projects🧑‍💻</span>
          </Nav.Link>
          <Nav.Link as={Link} to="my-inspirations">
            <span className='linkNavBarText'  onClick={closeMenu}>My inspirations✍️</span>
          </Nav.Link>
        </Nav>
        <div className="d-flex  gap-5 social-group mx-5">
          <a
            href="https://github.com/Pablo-German-Jimenez"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="github-icon-link "
          >
            <FaGithub style={{ fontSize: "50px" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/pablo-german-jimenez-0b706a200/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="linkedin-icon-link"
          >
            <FaLinkedin style={{ fontSize: "50px" }} />
          </a>
          <a
            href="https://instagram.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="instagram-icon-link"
          >
            <FaInstagram
              className="instagramIcon"
              style={{ fontSize: "50px" }}
            />
          </a>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBarComponent;
