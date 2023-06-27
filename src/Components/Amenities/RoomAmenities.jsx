import React, {useEffect, useState} from 'react';
import './RoomAmenities.css';
// import { AiOutlineWifi } from "react-icons/ai";
import { MdLocalParking, MdFamilyRestroom, MdOutdoorGrill, MdAccessible, MdBalcony } from "react-icons/md";
import { FaConciergeBell, FaBed, FaBath } from "react-icons/fa";
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
      </div>
    </div>
  )
}

export default RoomAmenities