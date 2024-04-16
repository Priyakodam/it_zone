

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
    {/* <div className="homecontainer mt-5">
      <HomeCarousel />
      </div> */}
      <div className="homecontainer mt-5">
      <HomeVideo />
      </div>
      <div className="homecontainer mt-5">
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
    
      {/* <div className="homecontainer mt-5">
        <h1 >ITZONE innovations at work</h1>
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="card">
          <img src={cc2} className="card-img-top" alt="Card 1" style={{width: "100%", height: "400px", objectFit: "cover", padding: "10px"}}/>
            <div className="card-body">
              <h4>Technology Solutions</h4>
              <p className="card-text"> IT Zone may be innovating in areas such as cloud computing, artificial intelligence, machine learning, Internet of Things (IoT), blockchain, cybersecurity, and data analytics. They might be developing new software products, or services that leverage these technologies to solve business challenges or improve efficiency.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card">
          <img src={cc2} className="card-img-top" alt="Card 1" style={{width: "100%", height: "400px", objectFit: "cover", padding: "10px"}}/>
            <div className="card-body">
              <h4>Emerging Technologies</h4>
              <p className="card-text"> Keeping an eye on emerging technologies such as quantum computing, augmented reality (AR), virtual reality (VR), and 5G networks, IT Zone may be investing in research and development to stay ahead of the curve and capitalize on future opportunities.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card">
          <img src={cc2} className="card-img-top" alt="Card 1" style={{width: "100%", height: "400px", objectFit: "cover", padding: "10px"}}/>
            <div className="card-body">
              <h4>User Experience (UX) and Design</h4>
              <p className="card-text">  IT Zone could be focusing on improving the user experience of their products and services through innovative design, intuitive interfaces, and seamless integration across devices and platforms.</p>
            </div>
          </div>
        </div>
        
        <div className="col-md-6 mb-3">
          <div className="card">
          <img src={cc2} className="card-img-top" alt="Card 1" style={{width: "100%", height: "400px", objectFit: "cover", padding: "10px"}}/>
            <div className="card-body">
              <h4>Sustainability and Green IT</h4>
              <p className="card-text">  IT Zone might be exploring ways to reduce the environmental impact of their technology solutions through initiatives such as energy-efficient data centers, eco-friendly hardware design, and carbon footprint reduction strategies.</p>
            </div>
          </div>
        </div>
       
      </div>
    </div> */}

      <div className="homecontainer mt-5">
        <div className="background-homecontainer">
          <img src={cc5} alt="Laptop" className="product-image" />
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
