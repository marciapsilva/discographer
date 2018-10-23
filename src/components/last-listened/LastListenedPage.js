import React, { Component } from 'react';
// import InsideNavbar from '../layout/InsideNavbar';
import LastListenedArtist from './LastListenedArtists';
import LastListenedAlbums from './LastListenedAlbums';
import LastListenedTracks from './LastListenedTracks';

class LastListenedPage extends Component {
  render() {
    return (
      <div className="container">
        {/* <InsideNavbar artist='Últimos artistas' albums='Últimos álbums' tracks='Últimas faixas'/> */}
        <LastListenedArtist />
        <LastListenedAlbums />
        <LastListenedTracks />
      </div>
    )
  }
}

export default LastListenedPage;