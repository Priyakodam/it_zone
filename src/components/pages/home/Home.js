import React from 'react';
import { Carousel } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../../img/4.jpg';
import cc2 from '../../img/cc2.jpg';

import part1 from '../../img/part1.jpg';

function Home() {
  return (
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
          <img src={image1} alt="Los Angeles" style={{ width: '100%', height: 'auto', maxHeight: '550px' }} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={part1} alt="Chicago" style={{ width: '100%', height: 'auto', maxHeight: '550px' }} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={cc2} alt="New york" style={{ width: '100%', height: 'auto', maxHeight: '550px' }} />
        </Carousel.Item>
      </Carousel>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
