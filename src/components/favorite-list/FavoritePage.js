import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
          <Route path='/favorite/artists' component={FavoriteArtists} />
          <Route path='/favorite/albums' component={FavoriteAlbums} />
          <Route path='/favorite/tracks' component={FavoriteTracks} />
        </Switch>
      </div>
    </BrowserRouter>
    )
  }
}

export default FavoritePage;
