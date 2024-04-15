
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import lap from "../../img/cc5.jpg";
import cc2 from "../../img/cc2.jpg";
import part6 from '../../img/part6.jpg';
import camera2 from '../../img/cc-camera2.webp'
import hardware from "../../img/hardware.jpeg";
import computer1 from '../../img/computer1.jpg'
import { Link } from 'react-router-dom';
import HomeCarousel from './HomeCarousel';
const Home = () => {
 
  return (
    <div>
      <div className="container mt-4">
      <HomeCarousel />
      </div>
      <div className="container mt-5">
        <div className="background-container">
          <img src={lap} alt="Laptop" className="product-image" />
          <div
            className="text-content bg-white p-5 "
            style={{ textAlign: "justify" }}
          >
            <div className="red-dash"></div>
            <h3 className="text-center">Products</h3>
            <p>
              iTZ-ONE is one of the leading companies in Computer Sales and
              Services that is gaining momentum each day. Backed by a strong
              team of highly-skilled professionals, we provide world-class
              services. We sell to our customers the latest and most reliable
              computers, which meet industry standards and come with the finest
              features and functions. Moreover, we have our own service center
              to bring out more technical solutions for you.
            </p>
            {/* <Button onClick={handleShow} className="discover-more-btn">
              view more
            </Button> */}
            <Link to="/products">
      <div className="button-container">
        <button className="btn btn-primary narrow-button">Learn More</button>
      </div>
    </Link>

          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 " style={{ textAlign: "justify" }}>
                <h3 className="text-center">About Us</h3>
                <p>
                In the IT industry, our team decided to alter direction. Now, we share our experiences to help others. Our ramp up process is 
      designed to empower your technical team or staff your company with the services they need to succeed. Ask us about the following 
      services: iTZ-ONE offers rapid, cost-effective IT solutions to the business challenges faced by companies through its in-depth 
      experience and knowledge, technological expertise, and project management skills. iT-ZONE has earned an excellent reputation as
      a solution-oriented organisation specialising in assisting its clients in developing innovative 
      strategies, the crafting of business effective technology solutions and the successful execution of highly complex projects. 

                </p>
                <Link to="/about">
      <div className="button-container">
        <button className="btn btn-primary narrow-button">Learn More</button>
      </div>
    </Link>
              </div>
              <div className="col-md-6 ">
                <img src={cc2} alt="Laptop" className="image" />
                <img src={cc2} alt="Laptop" className="image ipad-class mt-3" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="background-container">
          <img src={part6} alt="Laptop" className="product-image" />
          <div
            className="text-content text-image bg-white p-5"
            style={{ textAlign: "justify" }}
          >
            <div className="red-dash"></div>
            <h3 className="text-center">Our Services</h3>
            <p>
            iTZ-ONE differentiates itself from its larger industry counterparts with a unique understanding of the challenges both consulting 
    companies and their clients face. This has motivated our market positioning, where we prioritize hands-on involvement and accountability
     with our customers. 
            </p>
            {/* <Button onClick={handleShow} className="discover-more-btn">
              view more
            </Button> */}
            <Link to="/services">
      <div className="button-container">
        <button className="btn btn-primary narrow-button">Learn More</button>
      </div>
    </Link>
          </div>
        </div>
      </div>
      

      {/* <div className="container mt-5">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 " style={{ textAlign: "justify" }}>
                <h3 className="text-center">Enterprise Wi-Fi Solutions</h3>
                <p>
                  Today, businesses need fast and reliable internet connectivity
                  to be productive. This is true, especially in sectors where
                  companies utilize machine learning and artificial intelligence
                  in their systems. This need has led to the rise of enterprise
                  Wi-Fi solutions. These are advanced networks that use
                  strategic design, more access points, and better equipment to
                  create reliable web connectivity for business users.
                  Enterprise Wi-Fi utilizes slightly different management
                  methods and protocols compared to consumer networks. The
                  equipment can support bigger loads without being affected by
                  dropped or dead signals. An administrator controls access so
                  that only authorized people are able to connect. In short,
                  enterprise Wi-Fi is an advanced version of home Wi-Fi built to
                  manage the greater demands of public institutions and
                  businesses.
                </p>
              </div>

              <div className="col-md-6 image-container">
                <img src={computer3} alt="Laptop" className="image1" />
                <img
                  src={computer3}
                  alt="Laptop"
                  className="image1 ipad-class mt-2"
                />
                <img
                  src={computer3}
                  alt="Laptop"
                  className="image1 ipad-class mt-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}

    </div>
  );
};

export default Home;
