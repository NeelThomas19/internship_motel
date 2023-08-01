import React, {useEffect, useState} from 'react';
import './Amenities.css';
import { AiOutlineWifi } from "react-icons/ai";
import { MdLocalParking, MdFamilyRestroom, MdOutdoorGrill, MdAccessible } from "react-icons/md";
import { FaConciergeBell } from "react-icons/fa";
import { BiPlusCircle } from "react-icons/bi";

function Amenities () {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const amenitiesElement = document.getElementById('amenities');

      if (amenitiesElement) {
        const elementOffsetTop = amenitiesElement.offsetTop;
        const elementHeight = amenitiesElement.offsetHeight;

        // Calculate the visible range based on element position and window height
        const visibleRangeStart = scrollPosition + window.innerHeight * 0.2;
        const visibleRangeEnd = scrollPosition + window.innerHeight * 0.95;

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
    <div id='amenities' className={`amenities ${isVisible ? 'visible' : ''}`}>
      <div className='container text-center'>
      <div className="row">
        <div className="col-12">
          <h4 style={{fontSize:'44px'}}>Property Ameniities</h4>
            <div className='row row-cols-4'>
            <div class="col ">
            </div>
            <div className="col-4">
            <h5 style={{fontSize:'29px'}}><AiOutlineWifi style={{marginRight:'10px'}}/>Internet</h5>
            <ul className='clean'>
              <li style={{fontSize:'20px', marginLeft:'8px'}}>Available in all rooms: Free WiFi</li>
              <li style={{fontSize:'20px', marginLeft:'8px'}}>Available in some public areas: Free WiFi</li>
            </ul>
            <h5 style={{fontSize:'29px'}}><MdLocalParking style={{marginRight:'10px'}}/>Parking and Public <span style={{marginLeft:'39px'}}>Transport</span></h5>
            <ul className='distancing'>
              <li style={{fontSize:'20px', marginLeft:'8px'}}>Free self parking on site</li>
              <li style={{fontSize:'20px', marginLeft:'8px'}}>Limited on-site parking(max. 1 space per unit)</li>
            </ul>
            <h5 style={{fontSize:'29px'}}><MdFamilyRestroom style={{marginRight:'10px'}}/>Family Friendly</h5>
            <ul>
              <li style={{fontSize:'20px', marginLeft:'8px'}}>Microwave</li>
              <li style={{fontSize:'20px', marginLeft:'8px'}}>Fridge</li>
              <li style={{fontSize:'20px', marginLeft:'8px'}}>Sofa bed</li>
            </ul>
            <h5 style={{fontSize:'29px'}}><FaConciergeBell style={{marginRight:'10px'}}/>Guest Service</h5>
            <ul>
              <li style={{fontSize:'20px', marginLeft:'8px'}}>24-hour front desk</li>
            </ul>
            <br/>
        </div>
            <div className="col-4">
            <h5 style={{fontSize:'29px'}}><MdOutdoorGrill style={{marginRight:'10px'}}/>Outdoors</h5>
            <ul className='clean'>
              <li style={{fontSize:'20px', marginLeft:'8px'}}>BBQ Grills</li>
            </ul>
            <h5 style={{fontSize:'29px'}}><MdAccessible style={{marginRight:'10px'}}/>Accessibility</h5>
            <ul className='distancing'>
              <li style={{fontSize:'20px', marginLeft:'8px'}}>If you have any requests for specific accesibility needs, please contact the property using the information on the reservation confirmation received after booking.</li>
              <li style={{fontSize:'20px', marginLeft:'8px'}}>This property does not have any lifts</li>
              <li style={{fontSize:'20px', marginLeft:'8px'}}>Handrails in stairwells</li>
              <li style={{fontSize:'20px', marginLeft:'8px'}}>Upper floors accessible by stairs only</li>
              <li style={{fontSize:'20px', marginLeft:'8px'}}>Well-lit path to entrance</li>
            </ul>
            <h5 style={{fontSize:'29px'}}><BiPlusCircle style={{marginRight:'10px'}}/>More</h5>
            <ul>
              <li style={{fontSize:'20px', marginLeft:'8px'}}>Designated smoking areas</li>
            </ul>
            <br/>
        </div>
      </div>
      </div>
      </div>
      </div>
      {/* <hr style={{height:'8px' , backgroundColor:'black', border:'none'}}/>
      <div className='container text-center'>
      <div className="row">
        <div className="col-12">
          <h4>Room Ameniities</h4>
            <div className='row row-cols-4'>
            <div class="col ">
            </div>
            <div className="col-4">
            <h5><FaBed/>Bedroom</h5>
            <ul className='clean'>
              <li>Air Conditioning</li>
              <li>Bed Sheets</li>
              <li>Double sofa bed</li>
              <li>Free extra-futon mattress</li>
              <li>Heating</li>
            </ul>
            <h5><FaBath/>Bathroom</h5>
            <ul className='distancing'>
              <li>Shampoo</li>
              <li>Shower/bath combination</li>
              <li>Soap</li>
              <li>Toilet paper</li>
              <li>Towels</li>
            </ul>
            <h5><BsFillFilePlayFill/>Entertainment</h5>
            <ul>
              <li>32-inch flat-screen TV</li>
              <li>TV channels</li>
            </ul>
            <br/>
        </div>
            <div className="col-4">
            <h5><BiDrink/>Food and Drinks</h5>
            <ul className='clean'>
              <li>Coffee/Tea maker</li>
              <li>Microwave</li>
              <li>Paper Towels</li>
              <li>Fridge</li>
            </ul>
            <h5><MdBalcony/>Outdoor Space</h5>
            <ul className='distancing'>
              <li>Balcony</li>
            </ul>
            <h5><BiPlusCircle/>More</h5>
            <ul>
              <li>Desk.</li>
              <li>Eco-friendly cleaning products provided</li>
              <li>Individually decorated</li>
              <li>Individually furnished</li>
              <li>Iron/ironing board</li>
              <li>Restaurant dinning guide</li>
            </ul>
            <br/>
        </div>
      </div>
      </div>
      </div>
      </div> */}
      </div>
  )
}

export default Amenities