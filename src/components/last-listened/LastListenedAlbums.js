import React, { Component } from 'react';
// import AlbumsList from '../layout/AlbumsList';

class LastListenedAlbums extends Component {
  render() {
    return (
      <div className="container">
        <p className="center">Página com os últimos álbums ouvidos em desenvolvimento.</p>
        {/* <AlbumsList albums={this.props.last_albums}/> */}
      </div>
    )
  }
}

export default LastListenedAlbums;