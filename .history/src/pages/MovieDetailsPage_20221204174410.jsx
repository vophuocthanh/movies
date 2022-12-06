import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../config";

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/{movieId}?api_key=${apiKey}`,
    fetcher
    console.log("MovieDetailsPage ~ data", data);
  );
  return <div>Movie Details Page</div>;
};

export default MovieDetailsPage;
