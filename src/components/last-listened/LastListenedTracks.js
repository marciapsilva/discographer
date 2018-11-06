import React, { Component } from 'react';
// import TracksList from '../layout/TracksList';

class LastListenedTracks extends Component {
  render() {
    return (
      <div className="container">
        <p className="center">Página com as últimas faixas ouvidas em desenvolvimento.</p>
        {/* <TracksList tracks={this.props.last_tracks}/> */}
      </div>
    )
  }
}

export default LastListenedTracks;