import React, { Component } from 'react';
import { artistsActions } from '../../store/actions/artistsActions';
import { connect } from 'react-redux';
import SearchResult from '../layout/SearchResult';

class Search extends Component {
  state = {
    artist: 'Queen',
    albums: 14
  }
  addArtist = () => {
    this.props.addArtist(this.state)
  }
  render() {
    return (
      <SearchResult onClick={addArtist}/>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addArtist: artist => dispatch(artistsActions(artist));
  }
}

export default connect(null, mapDispatchToProps)(Search);