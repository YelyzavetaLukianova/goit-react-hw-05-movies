import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getApiMovieReview } from '../../../api';
import './ReviewsPage.css';

const ReviewsPage = () => {
  const params = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getMovieReviews = async () => {
      const reviews = await getApiMovieReview(params.movieId);
      setReviews(reviews);
    };
    getMovieReviews();
  }, [params.movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <p className="ReviewsPage__author">{review.author}</p>
              <p className="ReviewsPage__content">{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Reviews doesn`t exist</p>
      )}
    </div>
  );
};

export default ReviewsPage;
