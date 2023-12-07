import MoviesList from 'components/MoviesList/MoviesList';
import API from 'filmAPI';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Form, Input, Search } from './Movies.styled';

export default function Movies() {
  const [search, setSearch] = useSearchParams('');
  const [films, setFilms] = useState([]);
  const query1 = search.get('query1'|| '');

  useEffect(() => {
    if (!query1) {
      return;
    }
    API.getMovieToSearch(query1)
      .then(data => {
        setFilms(data.results);
      })
      .catch(err => console.error(err));
  }, [query1,search]);
  function updateSearch(event) {
    event.preventDefault();
     const search = event.target.search.value.trim().toLowerCase();
    if (search === '') {
      alert('Please, enter movie name')
      return setSearch({});
    }
   
    setSearch({ query1: search });
  }

  return (
    <>
      <Form onSubmit={updateSearch}>
        <Input type="text" name='search' />
        <Search type="submit">Search</Search>
      </Form>

      {films.length ? (
        <MoviesList films={films} />
      ) : (
        <p>The movie you are looking for was not found</p>
      )}
    </>
  );
}
