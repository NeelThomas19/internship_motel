import React, {useEffect, useState} from 'react';
import './RoomAmenities.css';
// import { AiOutlineWifi } from "react-icons/ai";
import { MdBalcony } from "react-icons/md";
import { FaBed, FaBath } from "react-icons/fa";
import { BiPlusCircle, BiDrink } from "react-icons/bi";
import { BsFillFilePlayFill } from "react-icons/bs";

function RoomAmenities () {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const roomamenitiesElement = document.getElementById('roomamenities');

      if (roomamenitiesElement) {
        const elementOffsetTop = roomamenitiesElement.offsetTop;
        const elementHeight = roomamenitiesElement.offsetHeight;

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
  return (
    <div id='roomamenities' className={`roomamenities ${isVisible ? 'visible' : ''}`}>
      <hr style={{height:'8px' , backgroundColor:'black', border:'none'}}/>
      <div className='container text-center'>
      <div className="row">
        <div className="col-12">
          <h4 style={{fontSize:'44px'}}>Room Ameniities</h4>
            <div className='row row-cols-4'>
            <div class="col ">
            </div>
            <div className="col-4">
            <h5 style={{fontSize:'29px'}}><FaBed/>Bedroom</h5>
            <ul className='clean'>
              <li style={{fontSize:'20px'}}>Air Conditioning</li>
              <li style={{fontSize:'20px'}}>Bed Sheets</li>
              <li style={{fontSize:'20px'}}>Double sofa bed</li>
              <li style={{fontSize:'20px'}}>Free extra-futon mattress</li>
              <li style={{fontSize:'20px'}}>Heating</li>
            </ul>
            <h5 style={{fontSize:'29px'}}><FaBath/>Bathroom</h5>
            <ul className='distancing'>
              <li style={{fontSize:'20px'}}>Shampoo</li>
              <li style={{fontSize:'20px'}}>Shower/bath combination</li>
              <li style={{fontSize:'20px'}}>Soap</li>
              <li style={{fontSize:'20px'}}>Toilet paper</li>
              <li style={{fontSize:'20px'}}>Towels</li>
            </ul>
            <h5 style={{fontSize:'29px'}}><BsFillFilePlayFill/>Entertainment</h5>
            <ul>
              <li style={{fontSize:'20px'}}>32-inch flat-screen TV</li>
              <li style={{fontSize:'20px'}}>TV channels</li>
            </ul>
            <br/>
        </div>
            <div className="col-4">
            <h5 style={{fontSize:'29px'}}><BiDrink/>Food and Drinks</h5>
            <ul className='clean'>
              <li style={{fontSize:'20px'}}>Coffee/Tea maker</li>
              <li style={{fontSize:'20px'}}>Microwave</li>
              <li style={{fontSize:'20px'}}>Paper Towels</li>
              <li style={{fontSize:'20px'}}>Fridge</li>
            </ul>
            <h5 style={{fontSize:'29px'}}><MdBalcony/>Outdoor Space</h5>
            <ul className='distancing'>
              <li style={{fontSize:'20px'}}>Balcony</li>
            </ul>
            <h5 style={{fontSize:'29px'}}><BiPlusCircle/>More</h5>
            <ul>
              <li style={{fontSize:'20px'}}>Desk.</li>
              <li style={{fontSize:'20px'}}>Eco-friendly cleaning products provided</li>
              <li style={{fontSize:'20px'}}>Individually decorated</li>
              <li style={{fontSize:'20px'}}>Individually furnished</li>
              <li style={{fontSize:'20px'}}>Iron/ironing board</li>
              <li style={{fontSize:'20px'}}>Restaurant dinning guide</li>
            </ul>
            <br/>
        </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default RoomAmenities