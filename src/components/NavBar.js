import React from 'react';
import { Link, NavLink } from 'react-router-dom';



const NavBar = () => {
  return (
    <div className='navbar'>
          <NavLink exact to="/" activeClassName="home">Home</NavLink>
          <NavLink exact  to="/actors" activeClassName="actors">Actors</NavLink>
          <NavLink exact to="/directors" activeClassName="directors">Directors</NavLink>
          <NavLink exact  to="/movies" activeClassName="movies">Movies</NavLink>
         
      
          </div>

  );
};

export default NavBar;
