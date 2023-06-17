import React from 'react';
import './Amenities.css';
import { AiOutlineWifi } from "react-icons/ai";
import { MdLocalParking, MdFamilyRestroom, MdOutdoorGrill, MdAccessible, MdBalcony } from "react-icons/md";
import { FaConciergeBell, FaBed, FaBath } from "react-icons/fa";
import { BiPlusCircle, BiDrink } from "react-icons/bi";
import { BsFillFilePlayFill } from "react-icons/bs";

const Amenities = () => {
  return (
    <div id='amenities' className='amenities'>
      <div className='container text-center'>
      <div className="row">
        <div className="col-12">
          <h4>Property Ameniities</h4>
            <div className='row row-cols-4'>
            <div class="col ">
            </div>
            <div className="col-4">
            <h5><AiOutlineWifi/>Internet</h5>
            <ul className='clean'>
              <li>Available in all rooms: Free WiFi</li>
              <li>Available in some public areas: Free WiFi</li>
            </ul>
            <h5><MdLocalParking/>Parking and Public Transport</h5>
            <ul className='distancing'>
              <li>Free self parking on site</li>
              <li>Limited on-site parking(max. 1 space per unit)</li>
            </ul>
            <h5><MdFamilyRestroom/>Family Friendly</h5>
            <ul>
              <li>Microwave</li>
              <li>Fridge</li>
              <li>Sofa bed</li>
            </ul>
            <h5><FaConciergeBell/>Guest Service</h5>
            <ul>
              <li>24-hour front desk</li>
            </ul>
            <br/>
        </div>
            <div className="col-4">
            <h5><MdOutdoorGrill/>Outdoors</h5>
            <ul className='clean'>
              <li>BBQ Grills</li>
            </ul>
            <h5><MdAccessible/>Accessibility</h5>
            <ul className='distancing'>
              <li>If you have any requests for specific accesibility needs, please contact the property using the information on the reservation confirmation received after booking.</li>
              <li>This property does not have any lifts</li>
              <li>Handrails in stairwells</li>
              <li>Upper floors accessible by stairs only</li>
              <li>Well-lit path to entrance</li>
            </ul>
            <h5><BiPlusCircle/>More</h5>
            <ul>
              <li>Designated smoking areas</li>
            </ul>
            <br/>
        </div>
      </div>
      </div>
      </div>
      </div>
      <hr style={{height:'8px' , backgroundColor:'blue', border:'none'}}/>
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

export default Amenities