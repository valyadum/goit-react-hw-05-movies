import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation} from 'react-router-dom';

export default function MoviesList({ films }) {
  const location = useLocation();
  
  return (
    <ul>
      {films &&
        films.map(({ title, id }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
