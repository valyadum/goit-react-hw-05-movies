import MoviesList from 'components/MoviesList';
import API from 'filmAPI';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {  useSearchParams } from 'react-router-dom';


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
  console.log(films);
  function updateSearch(event) {
    if (event.target.value === '') {
      return setSearch({});
    }
    setSearch({ query1: event.target.value });
  }
  // if (query.trim() === '') {
  //   return alert('Please, enter the name of the movie!');
  // }

  return (
    <>
      <form action="" onClick={onSearchMovie}>
        <input type="text" value={query1 ?? ''} onChange={updateSearch} />
        <button type="submit">Search</button>
      </form>

     <MoviesList films={films}/>
      {/* //   (
      //   <p>The movie you are looking for was not found</p>
      // ) */}
    </>
  );
}
//! перевірки на пустуй пошуковик, перевірку чи прийшли данні,
//TODO: стандартна картинка коли нічого не підгрузилось,
//TODO:  якщо прийшов пустий масив то виводимо альорт
//TODO: якщо  прийшла помилка запиту виводимо альорт
//TODO: коли ввели пробіли в пошуковик
//TODO:  коли нічого не знайшло по запиту
