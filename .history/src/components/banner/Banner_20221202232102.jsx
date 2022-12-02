import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { SwiperSlide, Swiper } from "swiper/react";
import { fetcher } from "../../config";

const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=55e25eecd2352fcad30e9d1c0a5aa854`,
    fetcher
  );
  const movies = data?.results || [];
  return (
    <section className="banner h-[500px] page-container mb-20">
      <div className="relative w-full h-full rounded-lg">
        <div className="absolute inset-0 rounded-lg overlay bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)]"></div>
        <img
          src="https://hdqwalls.com/download/avengers-endgame-2019-ro-1920x1080.jpg"
          alt=""
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="absolute w-full text-white bottom-5 left-5">
          <h2 className="mb-5 text-3xl font-bold ">Avengers: Endgame</h2>
          <div className="flex items-center mb-8 gap-x-3">
            <span className="px-4 py-2 border border-white rounded-md">
              Adventure
            </span>
            <span className="px-4 py-2 border border-white rounded-md">
              Action
            </span>
            <span className="px-4 py-2 border border-white rounded-md">
              Drama
            </span>
          </div>
          <button className="px-6 py-3 font-medium text-white rounded-lg bg-primary">
            Watch Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
