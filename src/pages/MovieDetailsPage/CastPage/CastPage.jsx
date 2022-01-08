import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getApiMovieCredit } from '../../../api';
import './CastPage.css';
import emptyImg from '../../../images/not_found.jpg';

const CastPage = () => {
  const params = useParams();

  const [actors, setActors] = useState([]);

  useEffect(() => {
    const getMovieCredit = async () => {
      const actors = await getApiMovieCredit(params.movieId);
      setActors(actors);
    };
    getMovieCredit();
  }, [params.movieId]);

  return (
    <div>
      {actors.length > 0 ? (
        <ul className="CastPage__list">
          {actors.map(actor => (
            <li className="CastPage__list__item" key={actor.id}>
              {actor.profile_path && (
                <img
                  className="CastPage__img"
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt=""
                />
              )}
              {!actor.profile_path && (
                <img className="CastPage__img" src={emptyImg} alt="" />
              )}
              <p>{actor.name}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Cast doesn`t exist</p>
      )}
    </div>
  );
};

export default CastPage;
