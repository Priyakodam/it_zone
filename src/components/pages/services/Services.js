import React from 'react';
import './Services.css'; // Ensure the CSS file is in the same directory
import repairImage1 from '../../img/part6.jpg';
import repairImage2 from '../../img/data1.jpg';
import repairImage3 from '../../img/licenses5.png';
import repairImage4 from '../../img/cc5.jpg';

const Services = () => {
  return (
    <div className='container'>
      <div className="services-container">
        <h2 className='text-center'>Our Services</h2>
        <p>iTZ-ONE differentiates itself from its larger industry counterparts with a unique understanding of the challenges both consulting companies and their clients face. This has motivated our market positioning, where we prioritize hands-on involvement and accountability with our customers.</p>
      </div>

      <div className="service-container container1">
        <div className="service-image">
          <img src={repairImage1} alt="Laptop Repair" />
        </div>
        <div className="service-content">
          <h1>Laptop Repair Service and Sales</h1>
          <p>Welcome to our Laptop Repair Service and Sales, <br/>

At IT-ZONE, we understand the importance of your laptop in today's digital world. Whether you're a student, professional, or simply rely on your laptop for personal use, we are here to provide you with reliable repair services and top-notch laptop sales. Our team of skilled technicians is dedicated to delivering exceptional customer service and ensuring that your laptop is functioning at its best.</p>
        </div>
      </div>

      <div className="service-container container2">
        <div className="service-content">
          <h1>Data Backup & Recovery</h1>
          <p>Our Data Backup and Recovery services ensure your data's safety and accessibility, minimizing potential losses due to data issues.</p>
        </div>
        <div className="service-image">
          <img src={repairImage2} alt="Data Backup & Recovery" />
        </div>
      </div>

      <div className="service-container container3">
        <div className="service-image">
          <img src={repairImage3} alt="Software Licensing Service" />
        </div>
        <div className="service-content">
          <h1>Software Licensing Service</h1>
          <p>We provide a comprehensive one-stop-shop for all your software licensing needs, partnering with global IT companies to deliver top-quality products.</p>
        </div>
      </div>

      <div className="service-container container4">
        <div className="service-content">
          <h2>CCTV Camera Installation</h2>
          <p>From commercial to residential setups, ITZ-ONE offers extensive CCTV installation services to ensure your security, accessible from anywhere in the world.</p>
        </div>
        <div className="service-image">
          <img src={repairImage4} alt="CCTV Camera Installation" />
        </div>
      </div>
    </div>
  );
}

export default Services;