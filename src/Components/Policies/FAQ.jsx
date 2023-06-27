import React, {useState, useEffect} from 'react';
import "./FAQ.css";

const FAQ = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const faqData = [
        {
          question: 'Is SeaRay Motel pet-friendly?',
          answer: 'No pets are not allowed at this property.',
        },
        {
          question: 'How much is parking at SeaRay Motel?',
          answer: 'Self parking is free at this property.',
        },
        {
          question: 'What time is check-in at SeaRay Motel?',
          answer: 'Check-in is from 3:00 PM - 5:00 AM. Late check-in is available during limited hours.',
        },
        {
          question: 'What time is check-out at SeaRay Motel?',
          answer: 'Checkout is at 10:00 AM.',
        },
        {
          question: 'Where is SeaRay Motel located?',
          answer: "Situated near the beach, this motel is steps away from Wildwood Beach and Wildwood Boardwalk. Morey's Piers is 0.5 mi (0.8 km) away.",
        },

      ];
      const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
      };

      useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.pageYOffset;
          const FAQElement = document.getElementById('FAQ');

          if (FAQElement) {
            const elementOffsetTop = FAQElement.offsetTop;
            const elementHeight = FAQElement.offsetHeight;

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
    <div id='FAQ' className={`FAQ ${isVisible ? 'visible' : ''}`}>
              <hr style={{height:'8px' , backgroundColor:'black', border:'none'}}/>
      <div className='container text-center'>
      <div className="row">
        <div className="col-12">
          <h4>Frequently asked questions</h4>
            <div className='row row-cols-4'>
            <div class="col ">
            </div>
            <div className="col-5">
            {faqData.map((faq, index) => (
        <div key={index}>
          <button style={{fontSize:'20px'}}
            className={`faq-question ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            <span className={`arrow ${index === activeIndex ? 'active' : ''}`} />
            {faq.question}
          </button>
          {index === activeIndex && <p style={{fontSize:'20px'}} className="faq-answer">{faq.answer}</p>}
        </div>
        ))}
        </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default FAQ