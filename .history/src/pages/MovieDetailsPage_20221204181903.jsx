import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../config";

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    fetcher
  );
  console.log("MovieDetailsPage ~ data", data);
  return (
    <Fragment>
      <div
        className="w-full h-screen bg-cover bg-no-repeat"
        style={
          {
            // backgroundImage: `url(https://image.tmdb.org/t/p/origin/${data.backdrop_path})`,
          }
        }
      ></div>
    </Fragment>
  );
};

export default MovieDetailsPage;
