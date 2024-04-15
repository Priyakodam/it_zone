import React, { useState } from 'react';
import './Carousel.css'; 

import Image1 from '../../img/computer1.jpg';
import Image2 from '../../img/cc1.jpg';
import Image3 from '../../img/licenses8.png';

function Carousel() {
    const [current, setCurrent] = useState(0);
    const images = [Image1, Image2, Image3];

    const nextSlide = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    };

    return (
        <div className='carousel'>
            <img src={images[current]} alt='slide-img' className='image' />
            <button onClick={prevSlide} className='left-arrow'>Prev</button>
            <button onClick={nextSlide} className='right-arrow'>Next</button>
        </div>
    );
}

export default Carousel;
