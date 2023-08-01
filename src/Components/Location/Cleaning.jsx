import React, { useState, useEffect } from 'react';
import './Cleaning.css';
// import { ImLocation } from "react-icons/im";
// import { IoRestaurant } from "react-icons/io5";
// import { AiFillCar } from "react-icons/ai";
// import { BsFillAirplaneFill } from "react-icons/bs";
import { GiBroom } from "react-icons/gi";
import { MdSocialDistance } from "react-icons/md";

function Cleaning() {
//   const [isExpanded, setisExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

//   const toggleExpanded = () =>{
//     setisExpanded(!isExpanded);
//   };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const cleaningElement = document.getElementById('cleaning');

      if (cleaningElement) {
        const elementOffsetTop = cleaningElement.offsetTop;
        const elementHeight = cleaningElement.offsetHeight;

        // Calculate the visible range based on element position and window height
        const visibleRangeStart = scrollPosition + window.innerHeight * 0.2;
        const visibleRangeEnd = scrollPosition + window.innerHeight * 0.8;

        // Check if the element is within the visible range
        const isVisible = elementOffsetTop + elementHeight > visibleRangeStart && elementOffsetTop < visibleRangeEnd;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

//   const text = 'Searay Motel is located close to Wildwood Beach, and has plenty to offer. Guests can connect to free in-room WiFi.';
  return (
    <div id='cleaning' className={`cleaning ${isVisible ? 'visible' : ''}`}>
      <div className='container text-center'>
      {/* <div class="row">
      <div class="col-6">
        <h4>About this area</h4>
        <h5>Wildwood</h5>
        <p>Located in Wildwood, Searay Motel is near the beach. Cape May National Wildlife Refuge and Stone Harbor Bird Sanctuary reflect the area's natural beauty and area attractions include Morey's Piers and Doo Wop Experience. Adventure Pier and Raging Waters Water Park are also worth visiting.</p>
      </div>
      <div class="col-6">
      <div class="container">
        <div class="row">
          <div class="col-9">Maps</div>
          <div class="col-5 "><ImLocation/><span style={{fontSize:'18px', fontWeight:'bold'}}>What's Nearby</span>
          <br />
          <p><span className='nearby'>Wildwood Beach</span> - 1 min walk</p>
          <p><span className='nearby'>Wildwood Boardwalk</span> - 2 min walk</p>
          <p><span className='nearby'>Wildwoods Convention Center</span> - 6 min walk</p>
          <p><span className='nearby'>Doo Wop Experience</span> - 6 min walk</p>
          <p><span className='nearby'>Morey's Piers</span> - 10 min walk</p>
          </div>
          <div class="col-5"><IoRestaurant/><span  style={{fontSize:'18px', fontWeight:'bold'}}>Restaurants</span>
          <br />
          <p><span className='nearby'>Mudhen Brewing</span> - 9 min walk</p>
          <p><span className='nearby'>Doo Wop Diner</span> - 11 min walk</p>
          <p><span className='nearby'>Mack's Pizza</span> - 10 min walk</p>
          <p><span className='nearby'>Dogtooth Bar & Grill</span> - 9 min walk</p>
          <p><span className='nearby'>Olympic Flame Restaurant</span> - 10 min walk</p>
          </div>
        </div>
        <div className="row">
        <div class="col-5 "><AiFillCar/><span style={{fontSize:'18px', fontWeight:'bold'}}>Getting around</span>
          <br />
          <p><span className='nearby'><BsFillAirplaneFill />Atlantic City, NJ (ACY-Atlantic City Intl.)</span> - 48 min drive</p>
          </div>
        </div>
      </div>
      </div>
      </div>
      <hr style={{height:'8px' , backgroundColor:'black', border:'none'}}/>
      <div className="row">
        <div className="col-12">
          <h4>About this property</h4>
            <div className='row row-cols-4'>
            <div class="col ">
            </div>
            <div className="col">
            <h5>SeaRay Motel</h5>
            <p>Motel near wildwood Boardwalk</p>
            <div className={isExpanded ? 'content expanded' : 'content'}>
            {isExpanded && (
              <div>
              <p>{isExpanded ? text : `${text.slice(0, 5)}...`}</p>
              <p>Additional perks include:</p>
              <ul>
                <li>Free self-parking.</li>
                <li>A 24-hour front desk and barbecues.</li>
              </ul>
              <p>Room features</p>
              <p>All 25 individually furnished rooms have comforts such as air conditioning, as well as amenities such as free WiFi.</p>
              <p>Other amenities include:</p>
              <ul>
                <li>Sofa, beds and free extra futons.</li>
                <li>Shower/bath combinations and shampoo.</li>
                <li>32-inch flat-screen TVs with cable channels.</li>
                <li>Wardrobes/cupboards, balconies and eco-friendly cleaning products.</li>
              </ul>
              </div>
              )}
            </div>
            <button className='seemore' onClick={toggleExpanded}>
              {isExpanded ? 'See Less' : 'See More'}
            </button>
            </div>
            </div>
            <div className='row row-cols-4' style={{paddingTop:'30px'}}>
            <div class="col ">
            </div>
            <div className="col">
              <h5>Language</h5>
              <p>English</p>
            </div>
        </div>
        </div>
      </div> */}
      <hr style={{height:'8px' , backgroundColor:'black', border:'none'}}/>
      <div className="row">
        <div className="col-12">
          <h4 style={{fontSize:'44px'}}>Cleaning and safety practices</h4>
            <div className='row row-cols-4'>
            <div class="col ">
            </div>
            <div className="col-4">
            <h5 style={{fontSize:'29px'}}><GiBroom />Enhanced cleaning measures</h5>
            <ul className='clean'>
              <li style={{fontSize:'20px'}}>Disinfectant is ued to clean the property.</li>
              <li style={{fontSize:'20px'}}>High-touched surfaces are cleaned and disinfected.</li>
              <li style={{fontSize:'20px'}}>Sheets and towels are washed at 60&deg;C or hotter.</li>
            </ul>
            <h5 style={{fontSize:'29px'}}><MdSocialDistance />Social Distancing</h5>
            <ul className='distancing'>
              <li style={{fontSize:'20px'}}>Protective shields in place at main contact areas.</li>
            </ul>
            <br/>
            <p style={{fontSize:'20px'}}>This information is provided by our partners.</p>
        </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Cleaning