import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <div id='header' className='header'>
      <div className="image-container">
      <img src='images\outside.jpg' alt='room'></img>
      <div className="image-text"><span>SeaRay</span> Motel</div>
      </div>
    </div>
  )
}

export default Header