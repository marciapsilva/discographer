import React, { Component } from 'react';
import ArtistList from '../layout/ArtistList';

class LastListenedArtist extends Component {
  render() {
    return (
      <div className="container">
        <ArtistList />
      </div>
    )
  }
}

export default LastListenedArtist;