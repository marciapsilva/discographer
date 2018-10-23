import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';

const SignInLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to="/recents">recentes</NavLink></li>
        <li><NavLink to="/favorite">favoritos</NavLink></li>
        <li><NavLink to="/">sair</NavLink></li>
      </ul>
      <SearchBar />
    </div>
  )
}

export default SignInLinks;