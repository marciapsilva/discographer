import React from 'react';
import { Link } from 'react-router-dom';

const InsideNavbar = (props) => {
  return (
    <div className="nav-wrapper indigo lighten-1">
      <div className="row">
        <Link to={`/${props.page}/artists`} className="col s4 white-text center">{props.artist}</Link>
        <Link to={`/${props.page}/albums`} className="col s4 white-text center">{props.albums}</Link>
        <Link to={`/${props.page}/tracks`} className="col s4 white-text center">{props.tracks}</Link>
      </div>
    </div>
  )
}

export default InsideNavbar;