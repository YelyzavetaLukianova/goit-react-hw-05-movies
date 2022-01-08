import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return (
    <div>
      <NavLink
        exact
        to="/"
        className={'LinkStyle'}
        activeClassName="LinkActive"
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={'LinkStyle'}
        activeClassName="LinkActive"
      >
        Movies
      </NavLink>
    </div>
  );
};

export default Nav;
