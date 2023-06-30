import React, {useState, useEffect} from 'react';
import './Feedback.css';

const ReviewForm = ({ onReviewSubmit }) => {
//   const [activeIndex, setActiveIndex] = useState(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const review = {
      rating,
      comment,
    };
    onReviewSubmit(review);
    setRating(0);
    setComment('');
  };

  return (
    <div id='feedback' className='feedback'>
      <div className="review-form">
      <h2>Customer Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Rating:</label>
          <div className="star-rating">
            <StarRating value={rating} onChange={handleRatingChange} />
          </div>
        </div>
        <div className="form-group">
          <label>Comment:</label>
          <textarea value={comment} onChange={handleCommentChange} placeholder="Leave a comment..." rows={4} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
      </div>
  )
}

const StarRating = ({ value, onChange }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="star-rating">
      {stars.map((star) => (
        <Star key={star} filled={star <= value} onClick={() => onChange(star)} />
      ))}
    </div>
  );
};

const Star = ({ filled, onClick }) => {
  return <span className={`star ${filled ? 'filled' : ''}`} onClick={onClick}>{filled ? '★' : '☆'}</span>;
};

const ReviewList = ({ reviews }) => {
  return (
    <div className="review-list">
      <h2>Customer Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <ul>
          {reviews.map((review, index) => (
            <li key={index} className="review-item">
              <div className="rating">{review.rating} ★</div>
              <div className="comment">{review.comment}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

function Feedback () {
  const [isVisible, setIsVisible] = useState(false);
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = (review) => {
    setReviews([...reviews, review]);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const feedbackElement = document.getElementById('feedback');

      if (feedbackElement) {
        const elementOffsetTop = feedbackElement.offsetTop;
        const elementHeight = feedbackElement.offsetHeight;

        // Calculate the visible range based on element position and window height
        const visibleRangeStart = scrollPosition + window.innerHeight * 0.4;
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
    <div id='feedback' className={`feedback ${isVisible ? 'visible' : ''}`}>
      <ReviewForm onReviewSubmit={handleReviewSubmit} />
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default Feedback