// import React, { useRef } from 'react'
import React from 'react'
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
const Overview = () => {
  return (
    <div id='overview' className='overview'>
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
      <div class="col-md-4"><ImLocation/>Wildwood Boardwalk</div>
      <div class="col-md-4 offset-md-4">2 min walk</div>
    </div>
    <div class="row">
      <div class="col-md-4"><ImLocation/>Wildwood Beach</div>
      <div class="col-md-4 offset-md-4">5 min walk</div>
    </div>
    <div class="row">
      <div class="col-md-4"><ImLocation/>Morey's Piers</div>
      <div class="col-md-4 offset-md-4">10 min walk</div>
    </div>
    <div class="row">
      <div class="col-md-4"><BsFillAirplaneFill/>Cape May, NJ(WWD-Cape May County)</div>
      <div class="col-md-4 offset-md-4">15 min drive</div>
    </div>
    </div>
  </div>
  </div>
      </div>
  )
}

export default Overview