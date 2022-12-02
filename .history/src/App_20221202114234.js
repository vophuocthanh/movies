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
          <div className="absolute w-full text-white bottom-5 left-5">
            <h2 className="mb-5 text-3xl font-bold ">Avengers: Endgame</h2>
            <div className="flex items-center gap-x-3">
              <span className="p-3 border border-white rounded-md">
                Adventure
              </span>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
