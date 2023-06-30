import React, {useState, useEffect} from 'react'
import "./ImpInfo.css";

const ImpInfo = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.pageYOffset;
        const impinfoElement = document.getElementById('impinfo');

        if (impinfoElement) {
          const elementOffsetTop = impinfoElement.offsetTop;
          const elementHeight = impinfoElement.offsetHeight;

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
    <div id='impinfo' className={`impinfo ${isVisible ? 'visible' : ''}`}>
      <div className='container text-center'>
      <hr style={{height:'8px' , backgroundColor:'black', border:'none'}}/>
      <div className="row">
        <div className="col-12">
          <h4 style={{fontSize:'44px'}}>Important Information</h4>
            <div className='row row-cols-4'>
            <div class="col ">
            </div>
            <div className="col-5">
            <h5 style={{fontSize:'29px'}}>Fees</h5>
            <ul className='clean'>
              <li style={{fontSize:'20px'}}>You will be asked to pay following charges at the property:
                <ul>
                  <li style={{fontSize:'20px'}}>Breakage deposit: USD 200.00 per day</li>
                  <li style={{fontSize:'20px'}}>Damage deposit of USD 200 will be collected before check-in</li>
                </ul>
              </li>
              <li style={{fontSize:'20px'}}>We have incuded all charges provided to us by the property.</li>
            </ul>
            <h5 style={{fontSize:'29px'}}>You need to know</h5>
            <ul className='distancing'>
              <li style={{fontSize:'20px'}}>Extra-person charges may apply and vary depending on property policy</li>
              <li style={{fontSize:'20px'}}>Government-issued photo identification and a credit card, debit card or cash deposit may be required at check-in for incidental charges</li>
              <li style={{fontSize:'20px'}}>Special requests are subject to availability upon check-in and may incur additional charges; special requests cannot be guaranteed</li>
              <li style={{fontSize:'20px'}}>This property accepts credit cards; cash is not accepted</li>
              <li style={{fontSize:'20px'}}>Safety features at this property include a smoke detector</li>
            </ul>
            <h5 style={{fontSize:'29px'}}>We should mention</h5>
            <ul>
              <li style={{fontSize:'20px'}}>This property does not have any lifts</li>
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

export default ImpInfo