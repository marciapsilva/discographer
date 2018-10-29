import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import InsideNavbar from '../layout/InsideNavbar';
import LastListenedArtist from './LastListenedArtists';
import LastListenedAlbums from './LastListenedAlbums';
import LastListenedTracks from './LastListenedTracks';
import { Redirect } from 'react-router-dom';

class LastListenedPage extends Component {
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/' />
    if (this.props.search.length !== 0) return <Redirect to='/search_result' />

    return (
      <BrowserRouter>
        <div className="container">
          <InsideNavbar page="recents" artist='Últimos artistas' albums='Últimos álbums' tracks='Últimas faixas'/>
          <Switch>
            <Route path='/recents/artists' render={routeProps => (<LastListenedArtist {...routeProps} last_artists={this.props.data.artists} />)} />
            <Route path='/recents/albums' render={routeProps => (<LastListenedAlbums {...routeProps} last_albums={this.props.data.albums} />)} />
            <Route path='/recents/tracks' render={routeProps => (<LastListenedTracks {...routeProps} last_tracks={this.props.data.tracks} />)} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: {
      artists: state.recentData.artists,
      albums: state.recentData.albums,
      tracks: state.recentData.tracks,
    },
    auth: state.firebase.auth,
    search: state.search.keyword
  }
}

export default connect(mapStateToProps)(LastListenedPage);