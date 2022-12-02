import React from "react";

const MovieCard = ({ item }) => {
  const { title, vote_average, release_date, poster_path } = item;
  return (
    <div className="p-3 text-white rounded-lg movie-card bg-slate-800">
      <img
        src="https://th.bing.com/th/id/R.8507f90d74a40b47290766ce6f373043?rik=yjjS0dp%2bDbZ6BQ&riu=http%3a%2f%2fcflanders7.files.wordpress.com%2f2013%2f02%2favengers-pic.jpg&ehk=Qf%2fu0dTOupcWGpc%2b2CKVu7ccfVNGcBA1mFV0qKncZx0%3d&risl=&pid=ImgRaw&r=0"
        alt=""
        className="object-cover w-full h-[250px] rounded-lg mb-5"
      />
      <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
      <div className="flex items-center justify-between mb-10 text-sm opacity-50">
        <span>{item.release_date}</span>
        <span>{item.vote_average}</span>
      </div>
      <button className="w-full px-6 py-3 capitalize rounded-lg bg-primary ">
        Watch Now
      </button>
    </div>
  );
};

export default MovieCard;
