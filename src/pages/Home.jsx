import API from 'filmAPI';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Home() {
  const [films, setFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    API.filmAPI()
      .then(({ results }) => setFilms(results))
      .catch(err => console.error(err));
  }, []);

  return (
    <ul>
      {films &&
        films.map(({ title, id }) => {
          return (
            <li key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}

//   /trending/get-trending
