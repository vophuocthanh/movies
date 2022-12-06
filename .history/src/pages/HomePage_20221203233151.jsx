import React, { Fragment } from "react";
import Banner from "../components/banner/Banner";
import MovieList from "../components/movie/MovieList";

const HomePage = () => {
  return (
    <Fragment>
      {/* <Banner></Banner> */}
      <section className="pb-20 movies-layout page-container">
        <h2 className="mb-10 text-3xl font-bold text-white capitalize">
          Now Playing
        </h2>
        <MovieList></MovieList>
      </section>
      <section className="pb-20 movies-layout page-container">
        <h2 className="mb-10 text-3xl font-bold text-white capitalize ">
          Top rated movies
        </h2>
        <MovieList type="top_rated"></MovieList>
      </section>
      <section className="pb-20 movies-layout page-container">
        <h2 className="mb-10 text-3xl font-bold text-white capitalize ">
          Top trending
        </h2>
        <MovieList type="popular"></MovieList>
      </section>
    </Fragment>
  );
};

export default HomePage;
