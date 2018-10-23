import React, { Component } from 'react';
// import InsideNavbar from '../layout/InsideNavbar';
import FavoriteArtists from './FavoriteArtists';
import FavoriteAlbums from './FavoriteAlbums';
import FavoriteTracks from './FavoriteTracks';

class FavoritePage extends Component {
  render() {
    return (
      <div className="container">
        {/* <InsideNavbar artist='Artistas favoritos' albums='Álbums favoritos' tracks='Faixas favoritas'/> */}
        <FavoriteArtists />
        <FavoriteAlbums />
        <FavoriteTracks />
      </div>
    )
  }
}

export default FavoritePage;