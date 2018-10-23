import React, { Component } from 'react';
import AlbumsList from '../layout/AlbumsList';

class LastListenedAlbums extends Component {
  render() {
    return (
      <div className="container">
        <AlbumsList />
      </div>
    )
  }
}

export default LastListenedAlbums;