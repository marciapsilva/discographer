import React from 'react';
import { Link } from 'react-router-dom';

const InsideNavbar = (props) => {
  return (
    <div className="nav-wrapper indigo darken-1 container">
      <Link to="/" className="left">{this.props.artist}</Link>
      <Link to="/" className="center">{this.props.albums}</Link>
      <Link to="/" className="right">{this.props.tracks}</Link>
    </div>
  )
}

export default InsideNavbar;