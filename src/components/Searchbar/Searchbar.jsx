import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';
import '../Searchbar/Searchbar.css';

const Searchbar = ({ onSubmit, initValue }) => {
  const [movieName, setMovieName] = useState(initValue);

  const handleMovieChange = e => {
    setMovieName(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (movieName.trim() === '') {
      alert('Enter what do You want');
      return;
    }
    onSubmit(movieName);
  };

  return (
    <>
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={handleSubmit}>
          <input
            name="imageName"
            value={movieName}
            className="SearchForm__input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleMovieChange}
          />
          <button type="submit" className="SearchForm__button">
            <span className="SearchForm__button__label">Search</span>
            <ImSearch />
          </button>
        </form>
      </header>
    </>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Searchbar;
