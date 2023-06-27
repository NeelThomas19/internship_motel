// import React, {useState, useEffect} from 'react';
// import './Policies.css';

// const ReviewForm = ({ onReviewSubmit }) => {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState('');

//   const handleRatingChange = (value) => {
//     setRating(value);
//   };

//   const handleCommentChange = (event) => {
//     setComment(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const review = {
//       rating,
//       comment,
//     };
//     onReviewSubmit(review);
//     setRating(0);
//     setComment('');
//   };

//   const faqData = [
//     {
//       question: 'Is SeaRay Motel pet-friendly?',
//       answer: 'No pets are not allowed at this property.',
//     },
//     {
//       question: 'How much is parking at SeaRay Motel?',
//       answer: 'Self parking is free at this property.',
//     },
//     {
//       question: 'What time is check-in at SeaRay Motel?',
//       answer: 'Check-in is from 3:00 PM - 5:00 AM. Late check-in is available during limited hours.',
//     },
//     {
//       question: 'What time is check-out at SeaRay Motel?',
//       answer: 'Checkout is at 10:00 AM.',
//     },
//     {
//       question: 'Where is SeaRay Motel located?',
//       answer: "Situated near the beach, this motel is steps away from Wildwood Beach and Wildwood Boardwalk. Morey's Piers is 0.5 mi (0.8 km) away.",
//     },

//   ];

//   const handleClick = (index) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };

//   return (
//     <div id='policies' className='policies'>
//       <div className='container text-center'>
//       <div className="row">
//         <div className="col-12">
//           <h4>Policies</h4>
//             <div className='row row-cols-4'>
//             <div class="col ">
//             </div>
//             <div className="col-4">
//             <h5>Check-in</h5>
//             <ul className='clean'>
//               <li>Check-in from 3:00 PM to 5:00 AM</li>
//               <li>Late Check-in subject to availability</li>
//               <li>Minimum check-in age-25</li>
//             </ul>
//             <h5>Special check-in instructions</h5>
//             <ul className='distancing'>
//               <li>Front desk staff will greet guests on arrival</li>
//             </ul>
//             <h5>Access Methods</h5>
//             <ul>
//               <li>Staffed front desk</li>
//             </ul>
//             <h5>Pets</h5>
//             <ul>
//               <li>Pets not allowed</li>
//             </ul>
//             <h5>Children and Extra beds</h5>
//             <ul>
//               <li>Children are welcome</li>
//             </ul>
//             <h5>Payments types at the property</h5>
//             <ul>
//               <li>Pets not allowed</li>
//             </ul>
//             <br/>
//         </div>
//             <div className="col-4">
//             <h5>Check-out</h5>
//             <ul className='clean'>
//               <li>Check-out before 10:00 AM</li>
//             </ul>
//         </div>
//       </div>
//       </div>
//       </div>
//       </div>
//       <hr style={{height:'8px' , backgroundColor:'black', border:'none'}}/>
//       <div className='container text-center'>
//       <div className="row">
//         <div className="col-12">
//           <h4>Important Information</h4>
//             <div className='row row-cols-4'>
//             <div class="col ">
//             </div>
//             <div className="col-5">
//             <h5>Fees</h5>
//             <ul className='clean'>
//               <li>You will be asked to pay following charges at the property:
//                 <ul>
//                   <li>Breakage deposit: USD 200.00 per day</li>
//                   <li>Damage deposit of USD 200 will be collected before check-in</li>
//                 </ul>
//               </li>
//               <li>We have incuded all charges provided to us by the property.</li>
//             </ul>
//             <h5>You need to know</h5>
//             <ul className='distancing'>
//               <li>Extra-person charges may apply and vary depending on property policy</li>
//               <li>Government-issued photo identification and a credit card, debit card or cash deposit may be required at check-in for incidental charges</li>
//               <li>Special requests are subject to availability upon check-in and may incur additional charges; special requests cannot be guaranteed</li>
//               <li>This property accepts credit cards; cash is not accepted</li>
//               <li>Safety features at this property include a smoke detector</li>
//             </ul>
//             <h5>We should mention</h5>
//             <ul>
//               <li>This property does not have any lifts</li>
//             </ul>
//             <br/>
//         </div>
//       </div>
//       </div>
//       </div>
//       </div>
//       <hr style={{height:'8px' , backgroundColor:'black', border:'none'}}/>
//       <div className='container text-center'>
//       <div className="row">
//         <div className="col-12">
//           <h4>Frequently asked questions</h4>
//             <div className='row row-cols-4'>
//             <div class="col ">
//             </div>
//             <div className="col-5">
//             {faqData.map((faq, index) => (
//         <div key={index}>
//           <button
//             className={`faq-question ${index === activeIndex ? 'active' : ''}`}
//             onClick={() => handleClick(index)}
//           >
//             <span className={`arrow ${index === activeIndex ? 'active' : ''}`} />
//             {faq.question}
//           </button>
//           {index === activeIndex && <p className="faq-answer">{faq.answer}</p>}
//         </div>
//         ))}
//         </div>
//       </div>
//       </div>
//       </div>
//       </div>
//       <hr style={{height:'8px' , backgroundColor:'black', border:'none'}}/>
//       <div className="review-form">
//       <h2>Customer Review</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Rating:</label>
//           <div className="star-rating">
//             <StarRating value={rating} onChange={handleRatingChange} />
//           </div>
//         </div>
//         <div className="form-group">
//           <label>Comment:</label>
//           <textarea value={comment} onChange={handleCommentChange} placeholder="Leave a comment..." rows={4} />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//       </div>
//   )
// }

// const StarRating = ({ value, onChange }) => {
//   const stars = [1, 2, 3, 4, 5];

//   return (
//     <div className="star-rating">
//       {stars.map((star) => (
//         <Star key={star} filled={star <= value} onClick={() => onChange(star)} />
//       ))}
//     </div>
//   );
// };

// const Star = ({ filled, onClick }) => {
//   return <span className={`star ${filled ? 'filled' : ''}`} onClick={onClick}>{filled ? '★' : '☆'}</span>;
// };

// const ReviewList = ({ reviews }) => {
//   return (
//     <div className="review-list">
//       <h2>Customer Reviews</h2>
//       {reviews.length === 0 ? (
//         <p>No reviews yet.</p>
//       ) : (
//         <ul>
//           {reviews.map((review, index) => (
//             <li key={index} className="review-item">
//               <div className="rating">{review.rating} ★</div>
//               <div className="comment">{review.comment}</div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// function Policies () {
//   const [isVisible, setIsVisible] = useState(false);
//   const [reviews, setReviews] = useState([]);

//   const handleReviewSubmit = (review) => {
//     setReviews([...reviews, review]);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.pageYOffset;
//       const policiesElement = document.getElementById('policies');

//       if (policiesElement) {
//         const elementOffsetTop = policiesElement.offsetTop;
//         const elementHeight = policiesElement.offsetHeight;

//         // Calculate the visible range based on element position and window height
//         const visibleRangeStart = scrollPosition + window.innerHeight * 0.4;
//         const visibleRangeEnd = scrollPosition + window.innerHeight * 0.9;

//         // Check if the element is within the visible range
//         const isVisible = elementOffsetTop + elementHeight > visibleRangeStart && elementOffsetTop < visibleRangeEnd;
//         setIsVisible(isVisible);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className={`policies ${isVisible ? 'visible' : ''}`}>
//       <ReviewForm onReviewSubmit={handleReviewSubmit} />
//       <ReviewList reviews={reviews} />
//     </div>
//   );
// };

// export default Policies