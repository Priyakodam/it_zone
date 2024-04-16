

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import cc5 from "../../img/cc5.jpg";
import cc2 from "../../img/cc2.jpg";
import cc3 from "../../img/cc3.jpg";
import data3 from "../../img/data3.webp";
import lap from "../../img/lap.jpg"
import part6 from '../../img/part6.jpg';
import camera2 from '../../img/cc-camera2.webp'
import hardware from "../../img/hardware.jpeg";
import computer1 from '../../img/computer1.jpg'
import { Link } from 'react-router-dom';
import HomeCarousel from './HomeCarousel';
import HomeVideo from './HomeVideo';
const Home = () => {
 
  return (
    <>
     <div className="homecontainer mt-5"></div>
   
     
      <HomeVideo />
      
      <div className="homecontainer mt-5">
      {/* <h1 >ITZONE innovations at work</h1> */}
    <div className="home-cards">    
    <div className="home-card ">
      <img src={cc3} alt="" className="service-img "  />
      <h3>Our business areas</h3>
      <p>IT-Zone’s operations are organized into four global business areas, which in turn are made up of 21 divisions.</p>
    </div>
    <div className="home-card ">
      <img src={data3} alt="" className="service-img" />
      <h3>Contact us</h3>
      <p>Get in touch with IT-Zone and find the right resources to help.</p>
    </div>
    <div className="home-card ">
      <img src={lap} alt="" className="service-img" />
      <h3>Our purpose</h3>
      <p>Our purpose is at the core of who we are and what we do.</p>
    </div>
    <div className="home-card ">
      <img src={cc2} alt="" className="service-img" />
      <h3>Technology and innovation</h3>
      <p>IT-Zone delivers end-to-end value by driving advances across a wide spectrum of industrial technologies.</p>
    </div>
    </div>
      </div>
    

      <div className="homecontainer mt-5">
        <div className="background-homecontainer">
          <img src={cc5} alt="Laptop" className="product-image" />
          <div
            className="hometext-content bg-white p-5 "
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
            
            <Link to="/products">

      <div className="button-homecontainer">
        <button className="btn btn-primary narrow-button">Explore More</button>
      </div>
    </Link>

          </div>
        </div>
      </div>

      <div className="homecontainer mt-5">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 " style={{ textAlign: "justify" }}>
                <h3 className="text-center">About Us</h3>
                <p>
                In the IT industry, our team decided to alter direction. Now, we share our experiences to help others. Our ramp up process is 
      designed to empower your technical team or staff your company with the services they need to succeed. Ask us about the following 
      services: iTZ-ONE offers rapid, cost-effective IT solutions to the business challenges faced by companies through its in-depth 
      experience and knowledge, technological expertise, and project management skills. 

                </p>
                <Link to="/about">
      <div className="button-homecontainer">
        <button className="btn btn-primary narrow-button">Explore More</button>
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

      <div className="homecontainer2 mt-5">
        <div className="background-homecontainer">
          <img src={part6} alt="Laptop" className="product-image" />
          <div
            className="hometext-content hometext-image bg-white p-5"
            style={{ textAlign: "justify" }}
          >
            <div className="red-dash"></div>
            <h3 className="text-center">Our Services</h3>
            <p>
            iTZ-ONE differentiates itself from its larger industry counterparts with a unique understanding of the challenges both consulting 
    companies and their clients face. This has motivated our market positioning, where we prioritize hands-on involvement and accountability
     with our customers. 
            </p>
           
            <Link to="/services">
      <div className="button-homecontainer">
        <button className="btn btn-primary narrow-button">Explore More</button>
      </div>
    </Link>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Home;
