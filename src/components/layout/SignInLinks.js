import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import { signOut } from '../../store/actions/authActions';

const SignInLinks = props => {  
  return (
    <div>
      <ul className="right">
        <li><NavLink to="/recents/artists">recentes</NavLink></li>
        <li><NavLink to="/favorite/artists">favoritos</NavLink></li>
        <li><NavLink to="/recents/artists" className="btn btn-floating pink lighten-1">
          {props.profile.initials}
        </NavLink></li>
        <li><a onClick={props.signOut}>sair</a></li>
      </ul>
      <SearchBar />
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignInLinks);