import React from 'react';
import { useParams } from 'react-router-dom';
import API from 'filmAPI';
import { useEffect, useState } from 'react';
import { Author, CardReviews } from './Reviews.styled';

const Reviews = () => {
  const [data, setData] = useState({});
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) {
      return;
    }
    API.getReviews(movieId)
      .then(info => {
        setData(info.results);
      })
      .catch(err => console.error(err));
  }, [movieId]);
  return (
    <ul>
      {data.length ? (
        data.map(({ author, content, id }) => {
          return (
            <CardReviews key={id}>
              <Author>{author}</Author>
              <p>{content}</p>
            </CardReviews>
          );
        })
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}{' '}
    </ul>
  );
};

export default Reviews;
