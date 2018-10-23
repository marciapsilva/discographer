import React from 'react';
import { Link } from 'react-router-dom';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';

const Navbar = () => {
  return (
    <nav className="nav-wrapper indigo darken-1">
      <div className="container">
        <Link to="/" className="brand-logo left">discographer</Link>
        <SignInLinks />
        <SignOutLinks />
      </div>
    </nav>
  )
}

export default Navbar;