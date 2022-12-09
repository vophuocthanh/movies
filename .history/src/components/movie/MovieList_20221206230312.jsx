import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "./MovieCard";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";

// https://api.themoviedb.org/3/movie/now_playing?api_key=55e25eecd2352fcad30e9d1c0a5aa854

const MovieList = ({ type = "now_playing" }) => {
  // lấy đường dẫn bên file config.js
  const { data } = useSWR(tmdbAPI.getMovieList(type), fetcher);
  const movies = data?.results || [];
  // console.log("MovieList ~ movies ", movies);
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
