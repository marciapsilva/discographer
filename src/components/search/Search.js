import React, { Component } from 'react';
import { artistsActions } from '../../store/actions/artistsActions';
import { connect } from 'react-redux';
import SearchResult from '../layout/SearchResult';
import { Redirect } from 'react-router-dom';
import { searchActions } from '../../store/actions/searchActions';

class Search extends Component {
  state = {
    artist: 'Queen',
    albums: 14,
    keywords: ''
  }
  componentDidMount = () => {
    this.props.search(this.state.keyword);
  }
  addArtist = () => {
    this.props.addArtist(this.state)
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/' />

    return (
      <SearchResult keyword={this.props.search} />
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    search: state.search.keyword
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // addArtist: artist => dispatch(artistsActions(artist))
    search: keyword => dispatch(searchActions(keyword))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);

/* <SearchResult onClick={addArtist}/> */