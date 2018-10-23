import React, { Component } from 'react';
import TracksList from '../layout/TracksList';

class LastListenedTracks extends Component {
  render() {
    return (
      <div className="container">
        <TracksList />
      </div>
    )
  }
}

export default LastListenedTracks;