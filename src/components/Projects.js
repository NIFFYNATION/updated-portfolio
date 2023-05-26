import React, { useState } from 'react';
import {Container, Col, Row, Tab, Tabs } from 'react-bootstrap';
import project1 from "../assets/img/project1.jpg";   
import project2 from "../assets/img/project2.jpg";   
import project3 from "../assets/img/project3.jpg";   
import { ProjectCard } from './ProjectCard';
import TrackVisibility from 'react-on-screen';

const TabPane = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
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

  return (
    <section>
           <Container>
          <Row>
            <Col>
              <TrackVisibility className="project">
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                    <h2>Projects</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec est eu mauris accumsan lacinia. Nam auctor efficitur diam non placerat.</p>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        
    <Tabs activeKey={activeTab} onSelect={handleTabChange} className="nav-pills mb-5 justify-content-center align-items-center" id="projects-tabs">
      <Tab eventKey="tab1" title="Wordpress">
      <Row>
             {
                   projects.map((project, index) => {
                     return <ProjectCard key={index} {... project}/>;
                   })
                 }
               </Row>
      
        {/* Content for Tab 1 */}
        <p>Tab 1 Content</p>
      </Tab>
      <Tab eventKey="tab2" title="React">
        {/* Content for Tab 2 */}
        <p>Tab 2 Content</p>
      </Tab>
      <Tab eventKey="tab3" title="PHP">
        {/* Content for Tab 3 */}
        <p>Tab 3 Content</p>
      </Tab>
    </Tabs>
          </Container>
    </section>
  );
 };

export default TabPane;