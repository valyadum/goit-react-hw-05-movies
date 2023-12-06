import API from 'filmAPI';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [data, setData] = useState({});

  const defaultImg =
    'https://cannamazoo.com/assets/defaults/img/default-product-img.jpg';
  
  useEffect(() => {
     if (!movieId) {
       return;
     }
    API.getMovieCredits(movieId)
      .then(info => {
        setData(info.cast);
      })
      .catch(err => console.error(err));
  }, [movieId]);
  return (
    <ul>
      {data.length &&
        data.map(({ character, name, profile_path,id }) => {
          return (
            <li key={id}>
              <img
                src={profile_path? `https://image.tmdb.org/t/p/w200/${profile_path}`: defaultImg}
                alt={name}
                width={250}
              />
              <p>{name}</p>
              <p>
                Character: <span>{character}</span>
              </p>
            </li>
          );
        })}
    </ul>
  );
};

export default Cast;
