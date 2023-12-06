import React from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import API from 'filmAPI';
import { useEffect, useState } from 'react';
import { useRef } from 'react';

export default function MovieDetails() {
  const [data, setData] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');


  const defaultImg =
    'https://cannamazoo.com/assets/defaults/img/default-product-img.jpg';


  useEffect(() => {
    if(!movieId){return}
    API.getFilmById(movieId)
      .then(info => {
        setData(info);
      })
      .catch(err => console.error(err));
  }, [movieId]);
  const { backdrop_path, title, vote_average, overview, genres } = data;
  return (
    <div>
      <Link to={backLink.current}>Go Back</Link>
      <img
        src={
          backdrop_path
            ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
            : defaultImg
        }
        width={250}
        alt={title}
      />
      <h2>{title}</h2>
      <p>User score: {vote_average}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <ul>
        Genres
        {genres &&
          genres.map(genre => {
            return <li key={genre.id}>{genre.name}</li>;
          })}
      </ul>
      <ul>
        {' '}
        Addiction information
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
