import React, { Component } from 'react';
import TracksList from '../layout/TracksList';

class FavoriteTracks extends Component {
  render() {  
    return (
      <div className="container">
        <TracksList tracks={this.props.fav_tracks} />
      </div>
    )
  }
}

export default FavoriteTracks;