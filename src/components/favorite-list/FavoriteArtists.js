import React, { Component } from 'react';
// import ArtistList from '../layout/ArtistList';

class FavoriteArtists extends Component {
  render() {
    return (
      <div className="container">
        <p className="center">Página com os artistas favoritos em desenvolvimento.</p>
        {/* <ArtistList artists={this.props.fav_artists} /> */}
      </div>
    )
  }
}

export default FavoriteArtists;