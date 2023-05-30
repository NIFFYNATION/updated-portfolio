import React, { useState } from 'react';
import {Row, Col, Container} from "react-bootstrap";
import emailjs from "@emailjs/browser";
import contactImg from "../assets/img/contact.jpg";


const ContactUs = () => {
  const formInitialData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };
  const [formData, setFormData] = useState(formInitialData);
  const [buttonText, setButtonText] = useState("Send");

  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormData({
      ...formData,
      [category]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    
    setButtonText("Sending...");

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone_number: formData.phone,
      message_html: formData.message,
    };
    emailjs
      .send(
        "service_g07cgat",
        "template_l16ehfo",
        templateParams,
        "jNKhUpq1O1wbypSeW"
      )
      .then(
        function (response) {
          setStatus({
            success: true,
            message: "Message sent successfully!",
          });
          setButtonText("Sent");
          setFormData(formInitialData);
        },
        function (error) {
          setStatus({
            success: false,
            message: "Message failed to send. Please try again later.",
          });
          setButtonText("Failed");
        }
      );
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Form validation logic
  //   if (validateForm()) {
  //     // Perform form submission logic here
  //     console.log(formData);
  //     setFormStatus('success');
  //     // Reset form fields
  //     setFormData({ name: '', email: '', message: '' });
  //   } else {
  //     setFormStatus('error');
  //   }
  // };

  // const validateForm = () => {
  //   // Perform your form validation checks here
  //   return formData.name !== '' && formData.email !== '' && formData.message !== '';
  // };

  return (
  
 <Container>
 <Row className="ContactUs-bx mt-5" id={"#get-intouch"}>
        <Col lg={6} md={6} xl={5}>
        <h3>Get in touch</h3>
        <img src={contactImg} alt="Contact Img" style={{width: "400px", marginTop: "1em", marginBottom:"2em", borderRadius: "5px"}}/>
       
        </Col>
        {/* <Col xs={12} md={6} xl={5} mt={5}>
            
         </Col>  */}
        <Col lg={6} md={6} xl={7}>
          <div >
            <form onSubmit={handleSubmit}>
            {status.message && (
                <Col>
                  <p
                    className={status.success === false ? "danger" : "success"}
                  >
                    {status.message}
                  </p>
                </Col>
              )}

           
            <div className="new-email-bx">
            <div>
              <input
                placeholder="Full Name"
                type="text"
                id="name"
                name="name"
                value={formData.name} 
                onChange={(e) => onFormUpdate("name", e.target.value)}
                required
              />
            </div>
            <div>
              <input
                placeholder="Phone Number"
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone} 
                onChange={(e) => onFormUpdate("phone", e.target.value)}
                required
              />
            </div>

            <div>
              <input
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => onFormUpdate("email", e.target.value)}
                required
              />
              <textarea 
                placeholder="Message"
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => onFormUpdate("message", e.target.value)}
                required
                row="5"
              />
            </div>

            </div>
            <button type="submit"> <span>{buttonText}</span></button>

            </form>
          </div>
        </Col>
    </Row>

 </Container>
  );
};

export default ContactUs;