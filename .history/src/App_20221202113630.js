import { Fragment } from "react";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <header className="flex items-center justify-center py-10 mb-10 text-white header gap-x-5">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner h-[400px] page-container">
        <div className="relative w-full h-full rounded-lg">
          <img
            src="https://hdqwalls.com/download/avengers-endgame-2019-ro-1920x1080.jpg"
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </section>
    </Fragment>
  );
}

export default App;
