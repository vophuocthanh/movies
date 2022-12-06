import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../config";
fetcher;

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  return <div>Movie Details Page</div>;
};

export default MovieDetailsPage;
