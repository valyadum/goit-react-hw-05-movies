import React from 'react';
import {  Outlet, useLocation, useParams } from 'react-router-dom';
import API from 'filmAPI';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { BoxFilm, BoxInfo, ButtonBack, CastLi, CastLink, CastStyle, Container, ContainerButton, ContainerFilm, GenresItem, GenresUl, Img, Line, Option, Text, TextStar, Title } from './MovieDetails.styled';
import { FaStar } from 'react-icons/fa';
import { IoMdPricetags } from 'react-icons/io';

export default function MovieDetails() {
  const [data, setData] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  const defaultImg =
    'https://cannamazoo.com/assets/defaults/img/default-product-img.jpg';

  useEffect(() => {
    if (!movieId) {
      return;
    }
    API.getFilmById(movieId)
      .then(info => {
        setData(info);
      })
      .catch(err => console.error(err));
  }, [movieId]);

 
  const { poster_path, title, vote_average, overview, genres } =
    data;
    // const styleBackGround = {
    //   backgroundImage: `url(https://image.tmdb.org/t/p/w500/${backdrop_path})`,
    //   backgroundRepeat: 'no-repeat',
    //   backgroundSize: ' cover',
    //   width: '100%',
    //   height: '100%',
    //   position: 'absolute',
    // };
  return (
    
      <Container >
        <ContainerButton>
          <ButtonBack to={backLink.current}>Go Back</ButtonBack>
        </ContainerButton>

        <ContainerFilm>
          <BoxFilm>
            <Img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : defaultImg
              }
              width={250}
              alt={title}
            />
          </BoxFilm>
          <BoxInfo>
            <Title>{title}</Title>
            <TextStar>
              User score: {vote_average} <FaStar color="gold" size={16} />
            </TextStar>
            {/* <h3>Overview</h3> */}
            <Text>{overview}</Text>
            <GenresUl>
              <IoMdPricetags color="white" />
              Genres:
              {genres &&
                genres.map(genre => {
                  return <GenresItem key={genre.id}>{genre.name}</GenresItem>;
                })}
            </GenresUl>
          </BoxInfo>
      </ContainerFilm>
      <CastStyle>
      <Line />
        <Option>
          {/* Addiction information */}
          <CastLi>
            <CastLink to="cast">Cast</CastLink>
          </CastLi>
          <CastLi>
            <CastLink to="reviews">Reviews</CastLink>
          </CastLi>
        </Option>
      <Outlet />
      </CastStyle>
      </Container>
  );
}
