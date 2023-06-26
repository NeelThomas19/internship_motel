// import React from "react";
// import './Navbar.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <ul class="nav nav-pills navbar-dark bg-dark">
//         <li class="nav-item">
//           <a class="nav-link" aria-current="page" href="#overview">
//             Overview
//           </a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#rooms">
//             Rooms
//           </a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#location">
//             Location
//           </a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#amenities">
//             Amenities
//           </a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#policies">
//             Policies
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;


import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      const scrollPosition = window.pageYOffset;

      if (scrollPosition > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavLinkClick = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div id='header' className='header'>
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#home">
          Logo
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#overview" onClick={handleNavLinkClick}>Overview</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#rooms" onClick={handleNavLinkClick}>Rooms</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#location" onClick={handleNavLinkClick}>Location</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#amenities" onClick={handleNavLinkClick}>Amenities</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#policies" onClick={handleNavLinkClick}>Policies</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="image-container">
    <img src='images\outside.jpg' alt='room'></img>
    <div className="image-text"><span>SeaRay</span> Motel</div>
    </div>
    </div>
  );
};

export default Navbar;
