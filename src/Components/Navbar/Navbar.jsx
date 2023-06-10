import React from "react";
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul class="nav nav-pills navbar-dark bg-dark">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#overview">
            Overview
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#rooms">
            Rooms
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#location">
            Location
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#amenities">
            Amenities
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#policies">
            Policies
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
