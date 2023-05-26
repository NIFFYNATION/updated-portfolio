import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {BiRightArrowCircle} from 'react-icons/bi';
import headerImg from "../assets/img/header-img.jpg";
import { TypeAnimation } from 'react-type-animation';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const period = 2000;

  useEffect(() =>{
    let ticker = setInterval(() => {
      tick();
    },delta)

    return () => { clearInterval (ticker)};
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta /2)
    }

    if (!isDeleting
      && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if(isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return(
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animated__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome To My Portfolio</span>
                <h1 className="wrap">My Name Is Emmanuel</h1>
                <TypeAnimation className="animate"
                    sequence={[
                      'A Web Developer', // Types 'One'
                      1000, // Waits 1s
                      'A Blogger', // Deletes 'One' and types 'Two'
                      2000, // Waits 2s
                      'A Vlogger', // Types 'Three' without deleting 'Two'
                      () => {
                        console.log('Sequence completed'); // Place optional callbacks anywhere in the array
                      }
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                  />
                <p>I'm a Nigerian web developer who is passionate about work, with good working experience and always available for your services.  </p>
                <button onClick={() => console.log('connect')}>Let's Connect <BiRightArrowCircle size={25} /></button>
            </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5} mt={5}>
            <img src={headerImg} alt="Header Img" style={{width: "300px", marginTop: "10em"}}/>
         </Col> 
        </Row>
      </Container>
    </section>
  )
}

export default Banner;