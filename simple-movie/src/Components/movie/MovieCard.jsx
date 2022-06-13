import React from "react";
import {useNavigate} from "react-router-dom";
import {tmdbApi} from "../../Config";
import Button from "../Button/Button";
import PropTypes, {func} from "prop-types";
import {withErrorBoundary} from "react-error-boundary";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";
const MovieCard = ({item}) => {
  const {backdrop_path, vote_average, title, poster_path, release_date, id} =
    item;
  const navigate = useNavigate();
  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 text-white h-full select-none">
      <img
        src={tmdbApi.imageConfig("w500", poster_path)}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5 "
      />
      <div className="flex flex-col flex-1">
        <h3 className="text-white text-xl font-bold mb-3">{title}</h3>
        <div className="flex items-center justify-between text-sm opacity-50 mb-10 ">
          <span>{new Date(release_date).getFullYear()}</span>
          <span className="flex justify-center items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            {vote_average}
          </span>
        </div>
        <Button bgColor="primary" onClick={() => navigate(`/movie/${id}`)}>
          Watch now
        </Button>
      </div>
    </div>
  );
};
MovieCard.propTypes = {
  item: PropTypes.shape({
    backdrop_path: PropTypes.string,
    vote_average: PropTypes.number,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    id: PropTypes.string,
  }),
};
function FallbackComponent() {
  return (
    <p className="bg-red-50 text-red-400">
      SomeThing went wrong with this component
    </p>
  );
}

export default withErrorBoundary(MovieCard, {
  FallbackComponent,
});
export const MovieCardSkeleton = () => {
  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 text-white h-full select-none">
      <LoadingSkeleton
        width="100%"
        height="250px"
        radius="8px"
        className="mb-5 "
      ></LoadingSkeleton>
      <div className="flex flex-col flex-1">
        <h3 className="text-white text-xl font-bold mb-3">
          {" "}
          <LoadingSkeleton
            width="100%"
            radius="8px"
            height="20px"
          ></LoadingSkeleton>
        </h3>
        <div className="flex  items-center justify-between text-sm opacity-50 mb-10 ">
          <span>
            {" "}
            <LoadingSkeleton
              width="50px"
              radius="8px"
              height="10px"
            ></LoadingSkeleton>
          </span>
          <span className="flex justify-center items-center gap-1">
            <LoadingSkeleton
              width="30px"
              radius="8px"
              height="10px"
            ></LoadingSkeleton>
          </span>
        </div>
        <LoadingSkeleton
          width="100%"
          radius="8px"
          height="40px"
        ></LoadingSkeleton>
      </div>
    </div>
  );
};
