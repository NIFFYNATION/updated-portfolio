import React, {useEffect, useState} from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import logo from '../assets/img/logo.png';
import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';

function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }

      window.addEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <>
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand  className="me-5" href="#home">
          <img src={logo} alt="Logo" style={{width:'200px'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>

            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>

           
           <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
           
          <span className="navbar-text">
            <div className="social-icon">
              <a href="/"><FaFacebook className="header-icon"/></a>
              <a href="/"><FaTwitter className="header-icon"/></a>
              <a href="/"><FaInstagram className="header-icon"/></a>
            </div>
            <a href="#get-intouch"><button className="vvd"><span>Let's Connect</span></button></a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    
  );
}

export default NavBar