import React, { useState } from "react";
import axios from "axios";
import "./Contact.css"; // Import CSS file
import "@fortawesome/fontawesome-free/css/all.css";
import { Button, TextField } from "@mui/material";

const Contact = () => {
  const [result, setResult] = React.useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    setResult("Sending....");
    e.preventDefault();
    try {
        const response = await axios.post(
            "https://kodamharish.pythonanywhere.com/form_data_send_mail",
            {
              to_email: "varunpruthvi4@gmail.com",
              subject: `Message from ${formData.name}`, // Use backticks (`) for template literals
              message: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
            }
          );
      setResult("Form Submitted Successfully");
      // alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send message:", error);
      // alert("Failed to send message. Please try again later.");
      setResult(error);
    }
  };

  return (
    <div className="my-container">
      <div className="contact-container">
        <div className="contact-section">
          <div className="contact-info">
            <h2>Reach Us</h2>
            <br />
            <div className="info-item">
              <h4>
                {/* <i className="fas fa-phone"></i>{" "} */}
                <a href="tel:8861796976" style={{ textDecoration: "none" }}>
                  <i className="fas fa-phone"></i> 8861796976
                </a>
              </h4>
              <br />
              {/* <p>8861796976</p> */}
            </div>
            <div className="info-item">
              <h4>
                <a
                  href="mailto:info@it-zone.in"
                  style={{ textDecoration: "none" }}
                >
                  <i className="fas fa-envelope"></i> info@it-zone.in
                </a>
              </h4>
              <br />
              {/* <p>info@it-zone.in</p> */}
            </div>
            <div className="info-item">
              <h4>
                <i className="fas fa-map-marker-alt"></i> IT Zone, Maruthi
                Nagar, Kaggadasapura, Bengaluru
              </h4>
              <br />
              {/* <p>IT Zone, Maruthi Nagar, Kaggadasapura, Bengaluru</p> */}
            </div>
          </div>

          <div className="contact-form">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <TextField
                  id="name"
                  type="text"
                  margin="dense"
                  variant="standard"
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  sx={{ width: "80%" }}
                />
              </div>
              <div className="form-group">
                <TextField
                  id="email"
                  type="email"
                  margin="dense"
                  variant="standard"
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  sx={{ width: "80%" }}
                />
              </div>
              <div className="form-group">
                <TextField
                  id="message"
                  label="Enter your message"
                  margin="dense"
                  name="message"
                  multiline
                  rows={4}
                  defaultValue=""
                  variant="standard"
                  value={formData.message}
                  onChange={handleChange}
                  sx={{ width: "80%" }}
                />
              </div>

              {/* <Button variant="contained" sx={{ width: "auto" }}>
                Submit
              </Button> */}
              <div className="custom-button-container">
                <Button
                  variant="contained"
                  className="custom-button"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </div>
              <span>{result}</span>
            </form>
          </div>
        </div>
        <div className="map">
          {/* Add your Google Maps component here */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.935217184163!2d77.674141374303!3d12.975995314783475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae115e29b036bb%3A0x212d95ef66ab35f0!2sMaruthi%20Nagar%2C%20Kaggadasapura%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1713101621232!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
