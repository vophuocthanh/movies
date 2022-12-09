export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "55e25eecd2352fcad30e9d1c0a5aa854";
export const tmdbAPI = {
  getMovieList: (type) =>
    `https://api.themoviedb.org/3/movie/${type}?api_key=55e25eecd2352fcad30e9d1c0a5aa854`,
};
