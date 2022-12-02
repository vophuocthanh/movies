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
            src="https://th.bing.com/th/id/R.1b3562ca42025745f8d2fef53b00d98b?rik=vwBpsDnG1N%2byQg&pid=ImgRaw&r=0"
            alt=""
          />
        </div>
      </section>
    </Fragment>
  );
}

export default App;
