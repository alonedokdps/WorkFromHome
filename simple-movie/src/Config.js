export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "2b071f55ecdcf2f72760c14222426803";
const tmdbEndPoint = "https://api.themoviedb.org/3/movie";
const tmdbEndPointSearchMovie = "https://api.themoviedb.org/3/search/movie";
export const tmdbApi = {
  getMovieList: (type, page = 1) =>
    `${tmdbEndPoint}/${type}?api_key=${apiKey}&page=${page}`,
  getMovieDetails: (movieId) => `${tmdbEndPoint}/${movieId}?api_key=${apiKey}`,
  getMovieMeta: (movieId, type) =>
    `${tmdbEndPoint}/${movieId}/${type}?api_key=${apiKey}`,
  getMoviesSearch: (type, query, page) =>
    `${tmdbEndPointSearchMovie}?api_key=${apiKey}&query=${query}&page=${page}`,
  imageConfig: (size, url) => `https://image.tmdb.org/t/p/${size}/${url}`,
};
