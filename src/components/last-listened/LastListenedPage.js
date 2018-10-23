import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import InsideNavbar from '../layout/InsideNavbar';
import LastListenedArtist from './LastListenedArtists';
import LastListenedAlbums from './LastListenedAlbums';
import LastListenedTracks from './LastListenedTracks';

class LastListenedPage extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <InsideNavbar page="recents" artist='Últimos artistas' albums='Últimos álbums' tracks='Últimas faixas'/>
          <Switch>
            <Route path='/recents/artists' component={LastListenedArtist} />
            <Route path='/recents/albums' component={LastListenedAlbums} />
            <Route path='/recents/tracks' component={LastListenedTracks} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default LastListenedPage;
