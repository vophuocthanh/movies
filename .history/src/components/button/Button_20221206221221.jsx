import React from "react";
import { Navigate } from "react-router-dom";

const Button = ({onClick, className , children}) => {
  return (
    <button
      onClick={}
      className="w-full px-6 py-3 mt-auto capitalize rounded-lg bg-primary"
    >
      Watch Now
    </button>
  );
};

export default Button;
