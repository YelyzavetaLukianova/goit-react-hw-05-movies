const API_KEY = '73e9137b2a364bbb6dc0bcf09aa07979';
const baseURL = 'https://api.themoviedb.org/3';

const getApiTranding = async () => {
  const result = await fetch(
    `${baseURL}/trending/movie/day?api_key=${API_KEY}`,
  );
  const { results } = await result.json();

  return results;
};

const getApiSearch = async query => {
  const result = await fetch(
    `${baseURL}/search/movie?api_key=${API_KEY}&query=${query}`,
  );
  const { results } = await result.json();

  return results;
};

const getApiMovieInfo = async movieId => {
  const result = await fetch(`${baseURL}/movie/${movieId}?api_key=${API_KEY}`);

  return await result.json();
};

const getApiMovieCredit = async movieId => {
  const result = await fetch(
    `${baseURL}/movie/${movieId}/credits?api_key=${API_KEY}`,
  );
  const { cast } = await result.json();

  return cast;
};

const getApiMovieReview = async movieId => {
  const result = await fetch(
    `${baseURL}/movie/${movieId}/reviews?api_key=${API_KEY}`,
  );
  const { results } = await result.json();

  return results;
};

export {
  getApiMovieReview,
  getApiMovieCredit,
  getApiMovieInfo,
  getApiSearch,
  getApiTranding,
};
