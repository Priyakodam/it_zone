import React, { useState, useEffect } from 'react';
import './Services.css'; 
import logo from '../../img/ITZone-logo.png'; 

const Services = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
   
    setAnimate(true);
  }, []);

  return (
    <div>
      <div className='services-container'>
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-8'>
      <h2>Our Services</h2>
      <p>
      iTZ-ONE differentiates itself very specifically from its larger industry counterparts. A unique understanding of the challenges facing both consulting companies as well as the organizations that utilize their services has to a large extent motivated the market positioning of iTZ-ONE. Rather than adopt an indifferent, non-accountable stance with its customers, iTZ-ONE has chosen the route of hands-on involvement and accountability.
      </p>
      </div>
      <div className='col-md-2'></div>
      </div>
      </div>
      <div className={`simplify-service mt-4 ${animate ? 'animate-from-left' : ''}`}>
      <div className='col-md-2'></div>
      <div className="col-md -4 text-section">
        <h2>Laptop Repair Service and Sales</h2>
        <p>Welcome to our Laptop Repair Service and Sales, 

At IT-ZONE, we understand the importance of your laptop in today's digital world. Whether you're a student, professional, or simply rely on your laptop for personal use, we are here to provide you with reliable repair services and top-notch laptop sales. Our team of skilled technicians is dedicated to delivering exceptional customer service and ensuring that your laptop is functioning at its best.</p>
       
      </div>
      <div className={`simplify-service mt-4 ${animate ? 'animate-from-right' : ''}`}>
        <img src={logo} alt="Download the ABB Care brochure" className="brochure-image" />
      </div>
      <div className='col-md-2'></div>
    </div>
    </div>
  );
};

export default Services;
