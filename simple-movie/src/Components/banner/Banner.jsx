import React, {useEffect, useState} from "react";
import useSWR from "swr";
import {fetcher, tmdbApi} from "../../Config";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigate, useNavigate} from "react-router-dom";
import Button from "../Button/Button";

const Banner = () => {
  const {data, error} = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=2b071f55ecdcf2f72760c14222426803`,
    fetcher
  );

  const movies = data?.results || [];
  return (
    <section className="banner h-[500px]  bg-white page-container mb-20 overflow-hidden">
      <Swiper className="h-full" grabCursor="true" slidesPerView={"auto"}>
        {movies &&
          movies.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <BannerItem item={item}></BannerItem>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
};
function BannerItem({item}) {
  const navigate = useNavigate();
  const {title, backdrop_path, id} = item;
  return (
    <div className="w-full h-full rounded-lg bg-white relative ">
      <div className="overlay absolute inset-0 bg-gradient-to-t  from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)]"></div>
      <img
        src={tmdbApi.imageConfig("original", backdrop_path)}
        className="object-cover w-full h-full object-center"
      />
      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-5">{title}</h2>
        <div className="flex items-center gap-x-3 mb-8">
          <span className="px-4 py-2 border border-white rounded-md">
            Adventure
          </span>
          <span className="px-4 py-2 border border-white rounded-md">
            Adventure
          </span>
          <span className="px-4 py-2 border border-white rounded-md">
            Adventure
          </span>
        </div>
        <Button
          bgColor="primary"
          className="w-auto"
          onClick={() => navigate(`/movie/${id}`)}
        >
          Watch now
        </Button>
      </div>
    </div>
  );
}
export default Banner;
