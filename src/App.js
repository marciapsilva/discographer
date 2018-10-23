import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/home/Home';
import Footer from './components/layout/Footer';
import LastListenedPage from './components/last-listened/LastListenedPage';
import FavoritePage from './components/favorite-list/FavoritePage';
import SearchResult from './components/layout/SearchResult';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/recents' component={LastListenedPage} />
            <Route path='/favorite' component={FavoritePage} />
            <Route path='/search_result' component={SearchResult} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
