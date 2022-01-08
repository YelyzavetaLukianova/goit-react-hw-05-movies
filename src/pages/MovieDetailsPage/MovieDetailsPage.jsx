import { useState, useEffect, lazy, Suspense } from 'react';
import {
  NavLink,
  useParams,
  useRouteMatch,
  useHistory,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { getApiMovieInfo } from '../../api';
import './MovieDetailsPage.css';
import emptyImg from '../../images/not_found.jpg';

const CastPage = lazy(() => import('./CastPage/CastPage'));
const ReviewsPage = lazy(() => import('./ReviewsPage/ReviewsPage'));

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);

  const params = useParams();
  const match = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    const getMovie = async () => {
      const movie = await getApiMovieInfo(params.movieId);
      setMovie(movie);
    };
    getMovie();
  }, [params.movieId]);

  return (
    <div>
      <button className="MovieDetails__btn" onClick={history.goBack}>
        Go back
      </button>
      {movie ? (
        <div className="MovieDetails__div">
          {movie.poster_path && (
            <img
              className="MovieDetails__img"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=""
            />
          )}
          {!movie.poster_path && (
            <img className="MovieDetails__img" src={emptyImg} alt="" />
          )}
          <div className="MovieDetails__wrapper">
            <h2>{movie.title}</h2>
            <h3>User score: {movie.vote_average}</h3>
            <p>{movie.overview}</p>
            <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
          </div>
        </div>
      ) : (
        'Movie is loading'
      )}
      <p className="MovieDetails__text">Additional Information : </p>
      <nav>
        <div>
          <NavLink to={`${match.url}/cast`} className="" activeClassName="">
            Cast
          </NavLink>
        </div>
        <div>
          <NavLink to={`${match.url}/reviews`} className="" activeClassName="">
            Reviews
          </NavLink>
        </div>
      </nav>
      <Suspense fallback="Loading">
        <Switch>
          <Route exact path={`${match.path}/cast`}>
            <CastPage />
          </Route>
          <Route exact path={`${match.path}/reviews`}>
            <ReviewsPage />
          </Route>
          <Route render={() => <Redirect to={match.url} />} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
