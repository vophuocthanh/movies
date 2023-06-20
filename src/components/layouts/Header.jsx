import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='main-content'>
      <header className='flex items-center justify-center pb-3 h-[110px] mb-5 text-white header gap-x-5 z-10 bg-[#191A2E]'>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? 'text-primary' : '')}
        >
          Home
        </NavLink>
        <NavLink
          to='/movies'
          className={({ isActive }) => (isActive ? 'text-primary' : '')}
        >
          Movies
        </NavLink>
      </header>
    </div>
  );
};

export default Header;
