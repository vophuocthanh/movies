import React from "react";
import { Navigate } from "react-router-dom";

const Button = ({ onClick, className, children, type = "button" }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full px-6 py-3 mt-auto capitalize rounded-lg bg-primary ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
