import React from "react";
import "./Cards.css";


const Cards = () => {
  return (
    <div className="service-cards">
    <div className="service-card ">
      <img src="https://static.vecteezy.com/system/resources/previews/022/975/273/non_2x/doctor-hold-icon-health-and-electronic-medical-record-on-interface-digital-healthcare-and-network-generative-ai-free-photo.jpg" alt="" className="service-img "  />
      <h3>Our business areas</h3>
      <p>IT-Zone’s operations are organized into four global business areas, which in turn are made up of 21 divisions.</p>
    </div>
    <div className="service-card ">
      <img src="https://thumbs.dreamstime.com/b/add-to-cart-internet-web-store-buy-online-e-commerce-concept-153472985.jpg" alt="" className="service-img" />
      <h3>Contact us</h3>
      <p>Get in touch with IT-Zone and find the right resources to help.</p>
    </div>
    <div className="service-card ">
      <img src="https://media.istockphoto.com/id/671400334/photo/businessman-hand-demonstrating-digital-connection-lines.jpg?s=612x612&w=0&k=20&c=p83TweFy3SaOTRJL3nSuxqKe31gllzV5VWfii2X6Pmc=" alt="" className="service-img" />
      <h3>Our purpose</h3>
      <p>Our purpose is at the core of who we are and what we do.</p>
    </div>
    <div className="service-card ">
      <img src="https://s3.wns.com/S3_5/Images/GenericHeaderBanner/DesktopImg/19227/3120/Shared-Services_HD-1980x1080px.jpg" alt="" className="service-img" />
      <h3>Technology and innovation</h3>
      <p>IT-Zone delivers end-to-end value by driving advances across a wide spectrum of industrial technologies.</p>
    </div>
    </div>
  );
};

export default Cards;
