import React, { Component } from 'react';
import ArtistList from '../layout/ArtistList';

class FavoriteArtists extends Component {
  render() {
    console.log(this.props);

    return (
      <div className="container">
        <ArtistList />
      </div>
    )
  }
}

export default FavoriteArtists;