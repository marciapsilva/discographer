import React, { Component } from 'react';
import AlbumsList from '../layout/AlbumsList';

class LastListenedAlbums extends Component {
  render() {
    return (
      <div className="container">
        <AlbumsList albums={this.props.last_albums}/>
      </div>
    )
  }
}

export default LastListenedAlbums;