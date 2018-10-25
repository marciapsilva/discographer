import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import InsideNavbar from '../layout/InsideNavbar';
import FavoriteArtists from './FavoriteArtists';
import FavoriteAlbums from './FavoriteAlbums';
import FavoriteTracks from './FavoriteTracks';

class FavoritePage extends Component {  
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <InsideNavbar page="favorite" artist='Artistas favoritos' albums='Álbums favoritos' tracks='Faixas favoritas'/>
          <Switch>
            <Route path='/favorite/artists' render={routeProps => (<FavoriteArtists {...routeProps} fav_artists={this.props.data.artists} />)} />
            <Route path='/favorite/albums' render={routeProps => (<FavoriteAlbums {...routeProps} fav_albums={this.props.data.albums} />)} />
            <Route path='/favorite/tracks' render={routeProps => (<FavoriteTracks {...routeProps} fav_tracks={this.props.data.tracks} />)} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: {
      artists: state.favoriteData.artists,
      albums: state.favoriteData.albums,
      tracks: state.favoriteData.tracks,
    }
  }
}

export default connect(mapStateToProps)(FavoritePage);
