import MoviesList from 'components/MoviesList/MoviesList';
import API from 'filmAPI';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Form, Input, Search } from './Movies.styled';

export default function Movies() {
  const [search, setSearch] = useSearchParams('');
  const [query, setQuery] = useState(null);
  const [films, setFilms] = useState([]);

  const query1 = search.get('query1');

  function onSearchMovie(event) {
    event.preventDefault();
    setQuery(query1);
  }
  useEffect(() => {
    if (!query) {
      return;
    }
    API.getMovieToSearch(query)
      .then(data => {
        setFilms(data.results);
      })
      .catch(err => console.error(err));
  }, [query]);
  function updateSearch(event) {
    if (event.target.value === '') {
      return setSearch({});
    }
    setSearch({ query1: event.target.value });
  }

  return (
    <>
      <Form action="submit" onClick={onSearchMovie}>
        <Input type="text" value={query1 ?? ''} onChange={updateSearch} />
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
