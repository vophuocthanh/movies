import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-center py-10 mb-5 text-white header gap-x-5">
      <NavLink className="text-primary">Home</NavLink>
      <span>Movies</span>
    </header>
  );
};

export default Header;
