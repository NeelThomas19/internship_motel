import React from 'react'
import Carousel from './Carousel.jsx';

const Images = () => {
    const images = [
      'images/outside.jpg',
      'images/308612485.jpg',
      'images/308634967.jpg',
      'Assets/Images/Screenshot 2023-06-01 223210.png',
      'Assets/Images/Screenshot 2023-06-01 223228.png',
      // Add more image URLs here
    ];

    return (
      <div>
        {/* <h1>Image Carousel</h1> */}
        <Carousel images={images} />
      </div>
    );
  };

export default Images