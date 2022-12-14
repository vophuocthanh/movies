import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard, { MovieCardSkeleton } from "./MovieCard";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
// https://api.themoviedb.org/3/movie/now_playing?api_key=55e25eecd2352fcad30e9d1c0a5aa854
// Phần Now Playing
const MovieList = ({ type = "now_playing" }) => {
  // lấy đường dẫn bên file config.js
  const { data, error } = useSWR(tmdbAPI.getMovieList(type), fetcher);
  const isLoading = !data && !error;
  const movies = data?.results || [];
  // console.log("MovieList ~ movies ", movies);
  return (
    <div className="movie-list">
      {!isLoading && (
        <>
          <Swiper
            grabCursor={"true"}
            spaceBetween={40}
            slidesPerView={"auto"}
          ></Swiper>
          <MovieCardSkeleton></MovieCardSkeleton>
          <MovieCardSkeleton></MovieCardSkeleton>
          <MovieCardSkeleton></MovieCardSkeleton>
          <MovieCardSkeleton></MovieCardSkeleton>
        </>
      )}
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
MovieList.protoTypes = {
  type: PropTypes.string.isRequired,
};
// xử lí lỗi
function FallbackComponent() {
  return (
    <p className="text-red-400 bg-red-50">
      Some thing went wrong with this components
    </p>
  );
}
export default withErrorBoundary(MovieList, {
  FallbackComponent,
});
