import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/scss";
import Banner from "./components/banner/Banner";
import Main from "./components/layouts/Main";
import MovieCard from "./components/movie/MovieCard";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route
            path="/"
            element={
              <>
                <Banner></Banner>
                <HomePage></HomePage>
              </>
            }
          ></Route>
          <Route path="/movies" element={<MovieCard></MovieCard>}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
