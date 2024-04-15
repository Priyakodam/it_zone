import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cc2 from '../../img/cc2.jpg';
import part1 from '../../img/part1.jpg';
import repairImage1 from '../../img/part6.jpg';
import repairImage2 from '../../img/data1.jpg';
import repairImage3 from '../../img/licenses5.png';
import repairImage4 from '../../img/cc5.jpg';
import './Home.css'

function Home() {
  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          {/* <iframe
            width="100%" 
            height='500px'
            src="https://www.youtube.com/embed/VKuNHLgrQno"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe> */}
           <Carousel>
        <Carousel.Item>
          <img src={cc2} alt="Los Angeles" style={{ width: '100%', height: 'auto', maxHeight: '550px' }} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={part1} alt="Chicago" style={{ width: '100%', height: 'auto', maxHeight: '550px' }} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={cc2} alt="New york" style={{ width: '100%', height: 'auto', maxHeight: '550px' }} />
        </Carousel.Item>
      </Carousel>
        </div>

<div className="aboutpage">
</div>
<div className="aboutcard">
  <div>
  <div className="blue-dash"></div>
    <h3 style={{color:'black'}}>About Us</h3>
    <p>
      In the IT industry, our team decided to alter direction. Now, we share our experiences to help others. Our ramp up process is 
      designed to empower your technical team or staff your company with the services they need to succeed. Ask us about the following 
      services: iTZ-ONE offers rapid, cost-effective IT solutions to the business challenges faced by companies through its in-depth 
      experience and knowledge, technological expertise, and project management skills. iT-ZONE has earned an excellent reputation as
      a solution-oriented organisation specialising in assisting its clients in developing innovative 
      strategies, the crafting of business effective technology solutions and the successful execution of highly complex projects. 
    </p>
  </div>
  <Link to="/about">
  <div className="button-container">
    <button className="btn btn-primary narrow-button">Learn More</button>
  </div>
  </Link>
</div>

<div className="servicespage"></div>
<div className="servicecard">
  <div>
    <h3 style={{color:'black'}}>Our Services</h3>
    <p>
    iTZ-ONE differentiates itself from its larger industry counterparts with a unique understanding of the challenges both consulting 
    companies and their clients face. This has motivated our market positioning, where we prioritize hands-on involvement and accountability
     with our customers. 
    </p>
  </div>
  <Link to="/services">
    <div className="button-container">
      <button className="btn btn-primary narrow-button">Learn More</button>
    </div>
  </Link>
</div>
<div className='productspage'></div>
  <div className="productscard">
    <div>
      <div className="blue-dash"></div>
      <h3 style={{color:'black'}}>Products</h3>
      <p>
      iTZ-ONE is one of the leading companies in Computer Sales and Services that is gaining momentum each day. Backed by a strong team of highly-skilled professionals, we provide world-class services. We sell to our customers the latest and most reliable computers, which meet industry standards and come with the finest features and functions. Moreover, we have our own service center to bring out more technical solutions for you.
      </p>
    </div>
    <Link to="/products">
      <div className="button-container">
        <button className="btn btn-primary narrow-button">Learn More</button>
      </div>
    </Link>
  </div>
  </div>
      
</div>
    
  </>
  );
}

export default Home;
