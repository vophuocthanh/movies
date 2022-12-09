import React from "react";

const Button = () => {
  return (
    <button
      onClick={() => navigate(`/movie/${id}`)}
      className="w-full px-6 py-3 mt-auto capitalize rounded-lg bg-primary"
    >
      Watch Now
    </button>
  );
};

export default Button;
