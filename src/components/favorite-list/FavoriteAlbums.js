import React, { Component } from 'react';
import AlbumsList from '../layout/AlbumsList';

class FavoriteAlbums extends Component {
  render() {
    return (
      <div className="container">
        <AlbumsList albums={this.props.fav_albums}/>
      </div>
    )
  }
}

export default FavoriteAlbums;