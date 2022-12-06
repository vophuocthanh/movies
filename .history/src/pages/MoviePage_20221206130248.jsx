import React, { useEffect, useState } from "react";
import useSWR from "swr";
import MovieCard from "../components/movie/MovieCard";
import { fetcher } from "../config";
import useDebounce from "../hooks/useDebounce";
import ReactPaginate from "react-paginate";

// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>

//  lưu cái page bên ngoài.
const pageCount = 5;
const itemsPerPage = 20;

const MoviePage = () => {
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    if (!data || !data.total_pages) return;
    const endOffset = itemOffset + itemsPerPage;
    setPageCount(Math.ceil(data.total_pages / itemsPerPage));
  }, []);
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  // chức năng next page
  const [nextPage, setNextPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=55e25eecd2352fcad30e9d1c0a5aa854&page=${nextPage}`
  );
  const filterDebounce = useDebounce(filter, 500);
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const { data, error } = useSWR(url, fetcher);
  const loading = !data && !error;
  // chức năng search
  useEffect(() => {
    if (filterDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=55e25eecd2352fcad30e9d1c0a5aa854&query=${filterDebounce}
        &page=${nextPage}`
      );
    } else {
      setUrl(
        `https://api.themoviedb.org/3/movie/popular?api_key=55e25eecd2352fcad30e9d1c0a5aa854&page=${nextPage}`
      );
    }
  }, [filterDebounce, nextPage]);
  const movies = data?.results || [];
  if (!data) return null;
  // const { page, total_pages } = data;
  // console.log("MovieList ~ movies ", movies);
  return (
    <div className="py-10 page-container">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            onChange={handleFilterChange}
            type="text"
            className="w-full p-4 text-white rounded-lg outline-none bg-slate-800"
            placeholder="Type here to search..."
          />
        </div>
        <button className="p-4 text-white bg-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      {loading && (
        <div className="w-10 h-10 mx-auto border-4 border-t-4 rounded-full border-primary border-t-transparent animate-spin"></div>
      )}
      <div className="grid grid-cols-4 gap-10">
        {!loading &&
          movies.length > 0 &&
          movies.map((item) => (
            <MovieCard key={item.id} item={item}></MovieCard>
          ))}
      </div>
      <div className="flex items-center justify-center mt-10 gap-x-5">
        <span
          className="cursor-pointer"
          // chức năng lùi
          onClick={() => setNextPage(nextPage - 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>

        {new Array(pageCount).fill(0).map((item, index) => (
          <span
            class="cursor-pointer inline-block py-2 px-4 rounded leading-none bg-white text-slate-900"
            onClick={() => setNextPage(index + 1)}
          >
            {index + 1}
          </span>
        ))}
        <span
          class="cursor-pointer" /* onClick={() => setNextPage(nextPage + 1)} */
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
            // chức năng next tới
            onClick={() => setNextPage(nextPage + 1)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default MoviePage;
