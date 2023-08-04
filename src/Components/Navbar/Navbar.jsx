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
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
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
