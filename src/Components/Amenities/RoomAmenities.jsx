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
      <div className='container text-center'>
      <hr style={{height:'8px' , backgroundColor:'black', border:'none'}}/>
      <div className="row">
        <div className="col-12">
          <h4 style={{fontSize:'44px'}}>Room Ameniities</h4>
            <div className='row row-cols-4'>
            <div class="col ">
            </div>
            <div className="col-4">
            <h5 style={{fontSize:'29px'}}><FaBed style={{marginRight:'10px'}}/>Bedroom</h5>
            <ul className='clean'>
              <li style={{fontSize:'20px', marginLeft:'8px'}}>Air Conditioning</li>
              <li style={{fontSize:'20px', marginLeft:'8px'}}>Bed Sheets</li>
              <li style={{fontSize:'20px', marginLeft:'8px'}}>Double sofa bed</li>
              <li style={{fontSize:'20px', marginLeft:'8px'}}>Free extra-futon mattress</li>
              <li style={{fontSize:'20px', marginLeft:'8px'}}>Heating</li>
            </ul>
            <h5 style={{fontSize:'29px'}}><FaBath style={{marginRight:'10px'}}/>Bathroom</h5>
            <ul className='distancing'>
              <li style={{fontSize:'20px', marginLeft:'8px'}}>Shampoo</li>
              <li style={{fontSize:'20px', marginLeft:'8px'}}>Shower/bath combination</li>
              <li style={{fontSize:'20px', marginLeft:'8px'}}>Soap</li>
              <li style={{fontSize:'20px', marginLeft:'8px'}}>Toilet paper</li>
              <li style={{fontSize:'20px', marginLeft:'8px'}}>Towels</li>
            </ul>
            <h5 style={{fontSize:'29px'}}><BsFillFilePlayFill style={{marginRight:'10px'}}/>Entertainment</h5>
            <ul>
              <li style={{fontSize:'20px', marginLeft:'8px'}}>32-inch flat-screen TV</li>
              <li style={{fontSize:'20px', marginLeft:'8px'}}>TV channels</li>
            </ul>
            <br/>
        </div>
            <div className="col-4">
            <h5 style={{fontSize:'29px'}}><BiDrink style={{marginRight:'10px'}}/>Food and Drinks</h5>
            <ul className='clean'>
              <li style={{fontSize:'20px', marginLeft:'8px'}}>Coffee/Tea maker</li>
              <li style={{fontSize:'20px', marginLeft:'8px'}}>Microwave</li>
              <li style={{fontSize:'20px', marginLeft:'8px'}}>Paper Towels</li>
              <li style={{fontSize:'20px', marginLeft:'8px'}}>Fridge</li>
            </ul>
            <h5 style={{fontSize:'29px'}}><MdBalcony style={{marginRight:'10px'}}/>Outdoor Space</h5>
            <ul className='distancing'>
              <li style={{fontSize:'20px', marginLeft:'8px'}}>Balcony</li>
            </ul>
            <h5 style={{fontSize:'29px'}}><BiPlusCircle style={{marginRight:'10px'}}/>More</h5>
            <ul>
              <li style={{fontSize:'20px', marginLeft:'8px'}}>Desk.</li>
              <li style={{fontSize:'20px', marginLeft:'8px'}}>Eco-friendly cleaning products provided</li>
              <li style={{fontSize:'20px', marginLeft:'8px'}}>Individually decorated</li>
              <li style={{fontSize:'20px', marginLeft:'8px'}}>Individually furnished</li>
              <li style={{fontSize:'20px', marginLeft:'8px'}}>Iron/ironing board</li>
              <li style={{fontSize:'20px', marginLeft:'8px'}}>Restaurant dinning guide</li>
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