

 function filmAPI(){
  return (
      fetch(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=8817625a99e963f36ab0e1c9bab55397`
      ).then(response => response.json())
  )
}
function getFilmById(movieId) {
     return (
         fetch(
             `https://api.themoviedb.org/3/movie/${movieId}?api_key=8817625a99e963f36ab0e1c9bab55397`
    ).then(response => response.json()))
}

// /movies/get-movie-details 
function getMovieCredits(movieId) {
    return (
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=8817625a99e963f36ab0e1c9bab55397`)
            .then(response => response.json())
    )
    
}
function getReviews(movieId) {
    return (
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=8817625a99e963f36ab0e1c9bab55397`)
            .then(response => response.json())
    ) 
    
}
function getMovieToSearch(query) {
    return (
        fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&api_key=8817625a99e963f36ab0e1c9bab55397`)
            .then(response => response.json())
    )

}
const API = { filmAPI, getFilmById, getMovieCredits, getReviews, getMovieToSearch }
export default API
