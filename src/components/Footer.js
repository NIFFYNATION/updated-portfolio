import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import {FaLinkedin, FaGithub, FaStackOverflow} from 'react-icons/fa';
function Footer () {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailchimpForm/>
          <Col sm={6}>
            <img src={logo} alt="Logo"/>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="/"><FaLinkedin className="header-icon"/></a>
              <a href="/"><FaGithub className="header-icon"/></a>
              <a href="/"><FaStackOverflow className="header-icon"/></a>
            </div>
            <p>CopyRight 2023. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;