import { Fragment } from "react";
import "swiper/scss";
import Banner from "./components/banner/Banner";
import Header from "./components/layouts/Header";
import MovieList from "./components/movie/MovieList";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <Fragment>
      <Header></Header>
      <Banner></Banner>
      <HomePage></HomePage>
    </Fragment>
  );
}

export default App;
