import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout';
import { lazy } from 'react';


const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews /Reviews '));

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes> 
  );
};
// 8817625a99e963f36ab0e1c9bab55397 key
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODE3NjI1YTk5ZTk2M2YzNmFiMGUxYzliYWI1NTM5NyIsInN1YiI6IjY1NjVlYTJmNmMwYjM2MDBhZTRmODIyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lFhJj989Osu-VyS-ovhTF_4h3_slVTkFiuQ535IpjhM токен
// https://api.themoviedb.org/3/movie/157336?api_key=8817625a99e963f36ab0e1c9bab55397
// https://api.themoviedb.org/3/movie/157336/videos?api_key=8817625a99e963f36ab0e1c9bab55397
