import React, {Fragment} from "react";
import MovieList from "../Components/movie/MovieList";
import useSWRInfinite from "swr/infinite";

const HomePage = () => {
  return (
    <Fragment>
      <section className="movie-layout page-container  pb-20 ">
        <h2 className="capitalize text-white mb-10 text-2xl font-bold">
          Now playing
        </h2>
        <MovieList type="now_playing" />
      </section>
      <section className="movie-layout page-container  pb-20 ">
        <h2 className="capitalize text-white mb-10 text-2xl font-bold">
          Top rated
        </h2>
        <MovieList type="top_rated" />
      </section>
      <section className="movie-layout page-container  pb-20 ">
        <h2 className="capitalize text-white mb-10 text-2xl font-bold">
          Trending
        </h2>
        <MovieList type="popular" />
      </section>
    </Fragment>
  );
};

export default HomePage;
