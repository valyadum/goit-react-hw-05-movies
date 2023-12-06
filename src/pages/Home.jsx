import MoviesList from 'components/MoviesList/MoviesList';
import API from 'filmAPI';
import { useEffect } from 'react';
import { useState } from 'react';


export default function Home() {
  const [films, setFilms] = useState([]);


  useEffect(() => {
    API.filmAPI()
      .then(({ results }) => setFilms(results))
      .catch(err => console.error(err));
  }, []);

  return <MoviesList films={films} />;
}


