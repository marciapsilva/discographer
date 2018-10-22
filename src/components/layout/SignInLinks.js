import React from 'react';
import { NavLink } from 'react-router-dom';

const SignInLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to="/">recentes</NavLink></li>
      <li><NavLink to="/">favoritos</NavLink></li>
      <li><NavLink to="/">sair</NavLink></li>
    </ul>
  )
}

export default SignInLinks;