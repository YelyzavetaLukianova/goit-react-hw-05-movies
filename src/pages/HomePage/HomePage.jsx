import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getApiTranding } from '../../api';
import './HomePage.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await getApiTranding();
      setMovies(movies);
    };
    getMovies();
  }, []);

  return (
    <div>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
