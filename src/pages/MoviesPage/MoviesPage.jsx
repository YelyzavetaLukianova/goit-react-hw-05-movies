import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as storage from '../../services/localStorage';
import Searchbar from '../../components/Searchbar/Searchbar';
import { getApiSearch } from '../../api';
import './MoviesPage.css';

const MoviesPage = () => {
  const [movieName, setMovieName] = useState(
    () => storage.get('movieName') ?? '',
  );
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!movieName) return;
    const getMovies = async () => {
      const movies = await getApiSearch(movieName);
      setMovies(movies);
    };
    getMovies();
  }, [movieName]);

  const handleSubmit = movieName => {
    storage.save('movieName', movieName);
    setMovieName(movieName);
  };

  return (
    <div>
      <Searchbar onSubmit={handleSubmit} initValue={movieName} />

      <ul className="MoviesPage__item">
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
