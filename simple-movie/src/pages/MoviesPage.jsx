import React, {useEffect, useState} from "react";
import ReactPaginate from "react-paginate";
import useSWR from "swr";
import MovieCard, {MovieCardSkeleton} from "../Components/movie/MovieCard";
import {fetcher, tmdbApi} from "../Config";
import useDebounce from "../hooks/useDebounce";
import {v4} from "uuid";
const itemsPerPage = 20;
const MoviesPage = () => {
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);

  const [filter, setFilter] = useState("");
  const [nextPage, setNextPage] = useState(1);
  const [url, setUrl] = useState(tmdbApi.getMovieList("popular", nextPage));
  const filterDebounce = useDebounce(filter, 500);
  console.log(typeof url);
  const {data, error} = useSWR(url, fetcher);
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setNextPage(() => {
      console.log(1);
      return 1;
    });
  };
  const loading = !data && !error;
  useEffect(() => {
    if (filterDebounce) {
      setUrl(tmdbApi.getMoviesSearch("search", filterDebounce, nextPage));
    } else {
      setUrl(tmdbApi.getMovieList("popular", nextPage));
    }
  }, [filterDebounce, nextPage]);

  const movies = data?.results || [];

  useEffect(() => {
    if (!data || !data.total_results) return;

    setPageCount(Math.ceil(data?.total_results / itemsPerPage));
  }, [data, itemOffset]);

  const handlePageClick = (event, check) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results;
    console.log(event.selected);
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
    window.scrollTo(0, 0);
  };

  return (
    <div className="py-10">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            type="text"
            onChange={handleFilterChange}
            className="w-full p-4 bg-slate-800 text-white outline-none"
            placeholder="Type here to search.... "
          />
        </div>
        <button className="p-4 bg-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      {/* {loading && (
        <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent border-t-4 mx-auto animate-spin"></div>
      )} */}
      {loading && (
        <div className="grid grid-cols-4 gap-10">
          {new Array(itemsPerPage).fill(0).map((item, index) => {
            return <MovieCardSkeleton key={v4()}></MovieCardSkeleton>;
          })}
        </div>
      )}
      <div className="grid grid-cols-4 gap-10">
        {!loading && movies.length > 0
          ? movies.map((item) => {
              return <MovieCard key={item.id} item={item} />;
            })
          : !loading && (
              <div className="text-center w-full text-xl">Not found movies</div>
            )}
      </div>
      <div className="mt-10">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className="pagination"
        />
      </div>
    </div>
  );
};

export default MoviesPage;
