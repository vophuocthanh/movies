import React from "react";
import useSWR from "swr";
import MovieList from "../components/movie/MovieList";
import { fetcher } from "../config";

const MoviePage = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=55e25eecd2352fcad30e9d1c0a5aa854`,
    fetcher
  );
  const movies = data?.results || [];
  console.log("MovieList ~ movies ", movies);
  return (
    <div className="py-10 ">
      <MovieList type="popular"></MovieList>
    </div>
  );
};

export default MoviePage;
