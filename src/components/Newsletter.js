import React, { useState } from 'react';
import {Alert, Row, Col} from "react-bootstrap";

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
        <h3>Subscribe to our Newsletter</h3>
        </Col>
        <Col lg={6} md={6} xl={7}>
          <div >
            <form onSubmit={handleSubmit}>
            {formStatus === 'success' && <p>Success! Your form has been submitted.</p>}
            {formStatus === 'error' && <p>Error! Please fill in all the fields.</p>}
            <div className="new-email-bx">
            <div>
              {/* <label htmlFor="name">Name:</label> */}
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
              {/* <label htmlFor="email">Email:</label> */}
              <input
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              {/* <label htmlFor="message">Message:</label> */}
              <textarea 
                placeholder="Message"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Submit</button>
            </div>
            </form>
          </div>
        </Col>
    </Row>
    </> 
  );
};

export default Newsletter;