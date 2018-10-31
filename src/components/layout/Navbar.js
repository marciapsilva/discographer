import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';
import { Redirect } from 'react-router-dom';

const Navbar = props => {
  const { auth, profile } = props;

  const links = auth.uid ? (
    <div>
      <SignInLinks profile={profile} />
      <Redirect to='/recents/artists' />
    </div>
  ) : <SignOutLinks />

  return (
    <nav className="nav-wrapper indigo darken-1">
      <div className="container">
        <Link to="/" className="brand-logo left">discographer</Link>
        { links }
      </div>
    </nav>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar);