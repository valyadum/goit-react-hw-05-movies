import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {BoardFilm, BoxFilm, FilmName, Img } from './MoviesList.styled';

export default function MoviesList({ films }) {
  const location = useLocation();
   const defaultImg =
     'https://cannamazoo.com/assets/defaults/img/default-product-img.jpg';
  return (
    <BoardFilm>
      {films &&
        films.map(({ title, id, poster_path }) => {
          return (
            <BoxFilm key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <Img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                      : defaultImg
                  }
                  width={200}
                  height={300}
                  alt={title}
                />
               <FilmName>{title}</FilmName> 
              </Link>
            </BoxFilm>
          );
        })}
    </BoardFilm>
  );
}
