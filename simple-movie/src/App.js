import "./App.css";
import {Fragment, lazy, Suspense} from "react";
import Main from "./Layout/Main";
import {Route, Routes} from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import Banner from "./Components/banner/Banner";
// import MoviesPage from "./pages/MoviesPage";
// import MovieDetailPage from "./pages/MovieDetailPage";
const HomePage = lazy(() => import("./pages/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const MovieDetailPage = lazy(() => import("./pages/MovieDetailPage"));
const Banner = lazy(() => import("./Components/banner/Banner"));
function App() {
  return (
    <Fragment>
      <Suspense fallback={<></>}>
        <Routes>
          <Route element={<Main></Main>}>
            <Route
              path="/"
              element={
                <>
                  <Banner />
                  <HomePage />
                </>
              }
            ></Route>
            <Route path="/movies" element={<MoviesPage />}></Route>
            <Route path="/movie/:movieId" element={<MovieDetailPage />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
