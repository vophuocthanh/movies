export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "55e25eecd2352fcad30e9d1c0a5aa854";
const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
export const tmdbAPI = {
  getMovieList: (type) => `${tmdbEndpoint}/${type}?api_key=${apiKey}`,
  getMovieDetails: (movieId) => `${tmdbEndpoint}/${movieId}?api_key=${apiKey}`,
};
