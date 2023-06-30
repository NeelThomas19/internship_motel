// import React, { useRef } from 'react'
import React, { useState, useEffect } from 'react'
import './Overview.css'
// import { FaParking, FaSnowflake} from "react-icons/fa";
// import { BiWifi } from "react-icons/bi";
// import { Ri24HoursLine } from "react-icons/ri";
// import { BsFillAirplaneFill } from "react-icons/bs";
// import { ImLocation } from "react-icons/im";
import { TbParking, Tb24Hours } from "react-icons/tb";
import { LuThermometerSnowflake } from "react-icons/lu";
import { FcWiFiLogo } from "react-icons/fc";
import { GrMapLocation } from "react-icons/gr";
import { GiCommercialAirplane } from "react-icons/gi";

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
        const visibleRangeStart = scrollPosition + window.innerHeight * 0.2;
        const visibleRangeEnd = scrollPosition + window.innerHeight * 0.9;

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
      <div className="row">
            <div className="col-6" style={{paddingLeft:'124px'}}>
                <h4 style={{paddingRight:'105px'}}>Popular Amenities</h4>
                <div className="row">
                    <div className="col-6">
                    <h6 style={{textAlign:'start'}}><TbParking style={{fontSize:'28px'}}/>Parking Included</h6>
                    </div>
                    <div className="col-6">
                    <h6 style={{textAlign:'start'}}><LuThermometerSnowflake style={{fontSize:'28px'}}/>Air Conditioning</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h6 style={{textAlign:'start'}}><Tb24Hours style={{fontSize:'28px'}}/>24/7 Front Desk</h6>
                    </div>
                    <div className="col-6">
                        <h6 style={{textAlign:'start'}}><FcWiFiLogo style={{fontSize:'35px'}}/>Free Wifi</h6>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <h4 style={{paddingRight:'215px'}}>Explore the Area</h4>
                <div className="row">
                    <div className="col-6">
                        <h6 style={{textAlign:'start'}}><GrMapLocation style={{fontSize:'28px'}}/>Wildwood Boardwalk</h6>
                    </div>
                    <div className="col-6">
                        <h6 style={{textAlign:'start'}}>2 min walk</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h6 style={{textAlign:'start'}}><GrMapLocation style={{fontSize:'28px'}}/>Wildwood Beach</h6>
                    </div>
                    <div className="col-6">
                        <h6 style={{textAlign:'start'}}>5 min walk</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h6 style={{textAlign:'start'}}><GrMapLocation style={{fontSize:'28px', color:'#c6ea1a'}}/>Morey's Piers</h6>
                    </div>
                    <div className="col-6">
                        <h6 style={{textAlign:'start'}}>10 min walk</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h6 style={{textAlign:'start'}}><GiCommercialAirplane style={{fontSize:'28px', color:'black'}}/>Cape May, NJ(WWD-Cape May County)</h6>
                    </div>
                    <div className="col-6">
                        <h6 style={{textAlign:'start'}}>15 min drive</h6>
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Overview