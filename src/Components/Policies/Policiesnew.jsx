import React, { useState, useEffect } from 'react'
import "./Policies.css";

function Policies () {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.pageYOffset;
        const policiesElement = document.getElementById('policies');

        if (policiesElement) {
          const elementOffsetTop = policiesElement.offsetTop;
          const elementHeight = policiesElement.offsetHeight;

          // Calculate the visible range based on element position and window height
          const visibleRangeStart = scrollPosition + window.innerHeight * 0.25;
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
    <div id='policies' className={`policies ${isVisible ? 'visible' : ''}`} >
        <div className='container text-center'>
      <div className="row">
        <div className="col-12">
          <h4>Policies</h4>
            <div className='row row-cols-4'>
            <div class="col ">
            </div>
            <div className="col-4">
            <h5>Check-in</h5>
            <ul className='clean'>
              <li>Check-in from 3:00 PM to 5:00 AM</li>
              <li>Late Check-in subject to availability</li>
              <li>Minimum check-in age-25</li>
            </ul>
            <h5>Special check-in instructions</h5>
            <ul className='distancing'>
              <li>Front desk staff will greet guests on arrival</li>
            </ul>
            <h5>Access Methods</h5>
            <ul>
              <li>Staffed front desk</li>
            </ul>
            <h5>Pets</h5>
            <ul>
              <li>Pets not allowed</li>
            </ul>
            <h5>Children and Extra beds</h5>
            <ul>
              <li>Children are welcome</li>
            </ul>
            <h5>Payments types at the property</h5>
            <ul>
              <li>Pets not allowed</li>
            </ul>
            <br/>
        </div>
            <div className="col-4">
            <h5>Check-out</h5>
            <ul className='clean'>
              <li>Check-out before 10:00 AM</li>
            </ul>
        </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Policies