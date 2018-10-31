import React, { Component } from 'react';
import ArtistList from '../layout/ArtistList';

class LastListenedArtists extends Component {  
  render() {    
    return (
      <div className="container">
        <ArtistList artists={this.props.last_artists}/>
      </div>
    )
  }
}

export default LastListenedArtists;