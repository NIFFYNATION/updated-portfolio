import React, { useState } from 'react';
import {Row, Col, Container} from "react-bootstrap";
import contactImg from "../assets/img/contact.jpg";


const Newsletter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation logic
    if (validateForm()) {
      // Perform form submission logic here
      console.log(formData);
      setFormStatus('success');
      // Reset form fields
      setFormData({ name: '', email: '', message: '' });
    } else {
      setFormStatus('error');
    }
  };

  const validateForm = () => {
    // Perform your form validation checks here
    return formData.name !== '' && formData.email !== '' && formData.message !== '';
  };

  return (
    <>
   <Row className="newsletter-bx">
        <Col lg={6} md={6} xl={5}>
        <h3>Get in touch</h3>
        <img src={contactImg} alt="Contact Img" style={{width: "400px", marginTop: "1em", borderRadius: "5px"}}/>
       
        </Col>
        {/* <Col xs={12} md={6} xl={5} mt={5}>
            
         </Col>  */}
        <Col lg={6} md={6} xl={7}>
          <div >
            <form onSubmit={handleSubmit}>
            {formStatus === 'success' && <p className="success">Success! Your form has been submitted.</p>}
            {formStatus === 'error' && <p className="danger">Error! Please fill in all the fields.</p>}
           
            <div className="new-email-bx">
            <div>
              <input
                placeholder="Name"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <input
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <textarea 
                placeholder="Message"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                row="5"
              />
            </div>

            </div>
            <button type="submit">Submit</button>

            </form>
          </div>
        </Col>
    </Row>
    </> 
  );
};

export default Newsletter;