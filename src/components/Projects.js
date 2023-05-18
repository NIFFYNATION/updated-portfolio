import React from 'react';
import { Container, Row, Col, Nav, Tab, TabPane} from "react-bootstrap";
import colorSharp2 from "../assets/img/giphy.gif";
import project1 from "../assets/img/project1.jpg";   
import project2 from "../assets/img/project2.jpg";   
import project3 from "../assets/img/project3.jpg";   
import { ProjectCard } from './ProjectCard';
import TrackVisibility from 'react-on-screen';


function Projects (){

  const projects = [
      {
        title: "Business Startup",
        description: "Design & Development", 
        imgUrl: project1,
      },
      {
        title: "Business Startup",
        description: "Design & Development", 
        imgUrl: project2,
      },
      {
        title: "Business Startup",
        description: "Design & Development", 
        imgUrl: project3,
      },
      {
        title: "Business Startup",
        description: "Design & Development", 
        imgUrl: project1,
      },
      {
        title: "Business Startup",
        description: "Design & Development", 
        imgUrl: project2,
      },
      {
        title: "Business Startup",
        description: "Design & Development", 
        imgUrl: project3,
      },
    ]

  return(
      <section className="project" id="project">
        <Container>
          <Row>
            <Col>
         
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                    <h2>Projects</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec est eu mauris accumsan lacinia. Nam auctor efficitur diam non placerat.</p>
                  </div>
                )}
              </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
            <Nav.Item>
              <Nav.Link  eventKey="first">Tab One</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab Two</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">
               Tab Three
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Row>
                {
                  projects.map((project, index) => {
                    return <ProjectCard key={index} {... project}/>;
                  })
                }
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="second">Lorem
            </Tab.Pane>
            <Tab.Pane eventKey="third">Lorem</Tab.Pane>
          </Tab.Content>
          </Tab.Container>
            </Col>
          </Row>
        </Container>
        {/* <img className="background-image-right" alt='mage' src={colorSharp2}></img> */}
      </section>
  )
}

export default Projects;