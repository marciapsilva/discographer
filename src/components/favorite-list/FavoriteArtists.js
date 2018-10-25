import React, { Component } from 'react';
import ArtistList from '../layout/ArtistList';

class FavoriteArtists extends Component {
  render() {
    return (
      <div className="container">
        <ArtistList artists={this.props.fav_artists} />
      </div>
    )
  }
}

export default FavoriteArtists;