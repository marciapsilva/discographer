import React, { Component } from 'react';
import TracksList from '../layout/TracksList';

class FavoriteTracks extends Component {
  render() {
    return (
      <div className="container">
        <TracksList />
      </div>
    )
  }
}

export default FavoriteTracks;