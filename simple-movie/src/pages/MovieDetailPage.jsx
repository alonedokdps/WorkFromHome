import React from "react";
import {useParams} from "react-router-dom";

import {SwiperSlide, Swiper} from "swiper/react";
import useSWR from "swr";
import MovieCard from "../Components/movie/MovieCard";
import {fetcher, tmdbApi} from "../Config";
import "swiper/css";
const MovieDetailPage = () => {
  const {movieId} = useParams();

  const {data, error} = useSWR(tmdbApi.getMovieDetails(movieId), fetcher);
  if (!data) return null;
  const {backdrop_path, poster_path, title, genres, overview} = data;
  return (
    <div className="pb-10">
      <div className="w-full h-[600px] relative ">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat "
          style={{
            backgroundImage: `url(${tmdbApi.imageConfig(
              "original",
              backdrop_path
            )})`,
          }}
        ></div>
      </div>
      <div className="w-full h-[300px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          className="w-full h-full object-cover  rounded-xl "
          alt=""
        />
      </div>
      <h1 className="text-center text-3xl font-bold text-white mb-10">
        {title}
      </h1>
      {genres.length > 0 && (
        <div className="flex items-center justify-center gap-x-5 mb-10">
          {genres.map((item) => (
            <span
              className="py-2 px-4 border-primary text-primary border rounded "
              key={item.id}
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
      <p className="text-center text-sm leading-relaxed max-w-[600px] mx-auto mb-10">
        {overview}
      </p>

      <MovieMeta type="credits" />
      <MovieMeta type="videos" />
      <MovieMeta type="similar" />
    </div>
  );
};

function MovieMeta({type = "videos"}) {
  const {movieId} = useParams();

  const {data, error} = useSWR(tmdbApi.getMovieMeta(movieId, type), fetcher);
  if (!data) return null;
  if (type === "credits") {
    const {cast} = data;
    if (!cast || cast.length < 0) return null;

    return (
      <div className="py-10">
        <h2 className="text-center text-2xl mb-10 ">Casts</h2>
        <div className="grid grid-cols-4 gap-5">
          {cast.slice(0, 4).map((item) => {
            return (
              <div className="cast-item">
                <img
                  src={tmdbApi.imageConfig("w500", item.profile_path)}
                  className="w-full h-[350px] object-cover rounded-lg mb-3"
                  alt=""
                />
                <h3 className="text-xl font-medium"> {item.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    const {results} = data;
    if (!results || results.length < 0) return null;
    if (type === "videos") {
      return (
        <div className="py-10">
          <div className="flex flex-col gap-10">
            {results.slice(0, 5).map((item) => {
              return (
                <div
                  key={item.id}
                  className="w-full flex flex-col gap-5 aspect-video "
                >
                  <h3 className="mb-5 text-xl font-medium p-3 bg-secondary inline-block text-white">
                    {item.name}
                  </h3>
                  <iframe
                    width="885"
                    height="498"
                    src={`https://www.youtube.com/embed/${item.key}`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    className="w-full h-full object-fill "
                  ></iframe>{" "}
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div className="py-10">
          <h2 className="text-3xl font-medium mb-10">Similar Movies</h2>
          <div className="movie-list">
            <Swiper
              grabCursor={"true"}
              spaceBetween={40}
              slidesPerView={"auto"}
            >
              {results.length > 0 &&
                results.map((item) => {
                  return (
                    <SwiperSlide key={item.id}>
                      <MovieCard item={item} />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </div>
      );
    }
  }
}

export default MovieDetailPage;
