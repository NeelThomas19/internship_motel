// import React, { useRef } from 'react'
import React, { useState, useEffect } from 'react'
import './Overview.css'
import { FaParking, FaSnowflake} from "react-icons/fa";
import { BiWifi } from "react-icons/bi";
import { Ri24HoursLine } from "react-icons/ri";
import { BsFillAirplaneFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";

// function Overview() {
//   const toastRef = useRef(null);

//   const handleButtonClick = () => {
//     const toast = toastRef.current;

//     if (toast) {
//       toast.show();
//     }
//   };
function Overview(){
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const overviewElement = document.getElementById('overview');

      if (overviewElement) {
        const elementOffsetTop = overviewElement.offsetTop;
        const elementHeight = overviewElement.offsetHeight;

        // Calculate the visible range based on element position and window height
        const visibleRangeStart = scrollPosition + window.innerHeight * 0.4;
        const visibleRangeEnd = scrollPosition + window.innerHeight * 0.6;

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
  return (
    <div id='overview' className={`overview ${isVisible ? 'visible' : ''}`}>
      <div className='container text-center'>
      <div class="row justify-content-around">
    <div class="col-4">
      <h4>Popular Amenities</h4>
      <div class="d-flex flex-row mb-3 grid gap-5 row-gap-3">
        <p class="card-text"><FaParking/>Parking Included</p>
        <p class="card-text"><FaSnowflake/>Air Conditioning</p>
      </div>
      <div class="d-flex flex-row mb-3 grid gap-5 row-gap-3">
        <p class="card-text"><Ri24HoursLine />24/7 Front Desk</p>
        <p class="card-text"><BiWifi/>Free WiFi</p>
        </div>
      {/* <div>
      <button onClick={handleButtonClick} type="button" class="btn btn-primary" id="liveToastBtn">See all &gt;</button>
      <div ref={toastRef} className="toast"  role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          <strong className="me-auto">Toast Title</strong>
          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div className="toast-body">
          This is the toast message.
        </div>
      </div>
    </div> */}
    </div>
    <div class="col-4 explore">
      <h4>Explore the area</h4>
    <div class="row">
      <div class="col-md-4"><ImLocation size={72}/>Wildwood Boardwalk</div>
      <div class="col-md-4 offset-md-4">2 min walk</div>
    </div>
    <div class="row">
      <div class="col-md-4"><ImLocation size={62}/>Wildwood Beach</div>
      <div class="col-md-4 offset-md-4">5 min walk</div>
    </div>
    <div class="row">
      <div class="col-md-4"><ImLocation size={42}/>Morey's Piers</div>
      <div class="col-md-4 offset-md-4">10 min walk</div>
    </div>
    <div class="row">
      <div class="col-md-4"><BsFillAirplaneFill size={75}/>Cape May, NJ(WWD-Cape May County)</div>
      <div class="col-md-4 offset-md-4">15 min drive</div>
    </div>
    </div>
  </div>
  </div>
      </div>
  )
}

export default Overview