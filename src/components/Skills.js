import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import poster1 from "../assets/img/poster1.jpg";
import poster2 from "../assets/img/poster2.jpg";
import poster3 from "../assets/img/poster3.jpg";
import colorSharp from "../assets/img/color-sharp.jpg";

function Skills  (){
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
          <div className="skill-bx">
            <h2>
              Skills
            </h2>
            <p>Here are my skills i'm good at.</p>
            <Carousel responsive={responsive} infinite={true} className="skill-slider" >
              <div className="item">
              <img src={poster1} alt="mage" />
              <h5>Web Development</h5>
              </div>
              <div className="item">
              <img src={poster2} alt="mage" />
              <h5>Blogging</h5>
              </div>
              <div className="item">
              <img src={poster3} alt="mage" />
              <h5>Vlogging</h5>
              </div>
              <div className="item">
              <img src={poster1} alt="mage" />
              <h5>Web Design</h5>
              </div>
            </Carousel>
          </div>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-images-left" alt='mage' src={colorSharp}  /> */}
    </section>
  )
}

export default Skills;