import React from "react";
import useSWR from "swr";
import MovieCard from "../components/movie/MovieCard";
import { fetcher } from "../config";

const MoviePage = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=55e25eecd2352fcad30e9d1c0a5aa854`,
    fetcher
  );
  const movies = data?.results || [];
  console.log("MovieList ~ movies ", movies);
  return (
    <div className="py-10 ">
      <div className="grid grid-col-4 gap-10">
        {movies.length > 0 &&
          movies.map((item) => (
            <MovieCard key={item.id} item={item}></MovieCard>
          ))}
      </div>
    </div>
  );
};

export default MoviePage;
