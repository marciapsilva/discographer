import React, { Component } from 'react';
import { compose } from 'redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import InsideNavbar from '../layout/InsideNavbar';
import LastListenedArtist from './LastListenedArtists';
import LastListenedAlbums from './LastListenedAlbums';
import LastListenedTracks from './LastListenedTracks';

class LastListenedPage extends Component {
  state = {
    artists: ''
  }
  componentDidMount = async () => {
    this.props.data.artists && await this.filterArtists();
  }
  componentDidUpdate = async () => {
    this.props.data.artists && await this.filterArtists();
  }
  filterArtists = async () => {
    const filterByUser = this.props.data.artists.filter(artist => {
      return artist.authorId === this.props.auth.uid && artist.type === 'artist';
    })
    if (this.state.artists.length === 0) {
      await this.setState({
        artists: filterByUser
      })
    }
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/' />
    if (this.props.search.length !== 0) return <Redirect to='/search_result' />
 
    return (
      <BrowserRouter>
        <div className="container">
          <InsideNavbar page="recents" artist='Últimos artistas' albums='Últimos álbums' tracks='Últimas faixas'/>
          <Switch>
            {this.state.artists.length && 
              <Route path='/recents/artists' render={routeProps => (<LastListenedArtist {...routeProps} last_artists={this.state.artists} />)} />
            }
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
      artists: state.firestore.ordered.recent,
      albums: state.recentData.albums,
      tracks: state.recentData.tracks,
    },
    auth: state.firebase.auth,
    search: state.search.keyword
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'recent' }])
)(LastListenedPage);