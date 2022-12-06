import React from "react";
import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  console.log("MovieDetailsPage ~ params: ", params);
  return <div>Movie Details Page</div>;
};

export default MovieDetailsPage;
