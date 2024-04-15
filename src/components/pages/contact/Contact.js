import React, { useState } from 'react';
import "./Contact.css"; // Import CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
});


const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('https://kodamharish.pythonanywhere.com/form_data_send_mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                to_email: 'uppalahemanth4@gmail.com', // Email to which you want to send the form data
                subject: `Message from ${formData.name}`,
                message: `Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
                // You can modify this body content according to your API requirements and how you want the email to be formatted.
            })
        });

        if (!response.ok) {
            throw new Error('Something went wrong with the network request');
        }

        const data = await response.json();
        alert('Message sent successfully!');
    } catch (error) {
        console.error('Failed to send message:', error);
        alert('Failed to send message. Please try again later.');
    }
};



  return (
    <div className='my-container'>
    <div className="contact-container mt-5 mb-5">
      <div className="contact-section">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="info-item">
            <h3>Phone Number</h3>
            <p>8861796976</p>
          </div>
          <div className="info-item">
            <h3>Email</h3>
            <p>info@it-zone.in</p>
          </div>
          <div className="info-item">
            <h3>Address</h3>
            <p>IT Zone, Maruthi Nagar, Kaggadasapura, Bengaluru</p>
          </div>
        </div>
        <div className="contact-form">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange}></textarea>
                </div>
                <button type="submit">Submit</button>
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
