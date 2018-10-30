import React, { Component } from 'react';
import { artistsActions } from '../../store/actions/artistsActions';
import { connect } from 'react-redux';
import SearchResult from '../layout/SearchResult';
import { Redirect } from 'react-router-dom';
import { searchKeyword } from '../../store/actions/searchActions';

class Search extends Component {
  state = {
    artist: 'Queen',
    albums: 14,
    clear_keyword: '',
    keyword: ''
  }
  componentDidMount = () => {
    this.saveKeywordOnState();
    this.clearRedirect();
  }
  componentDidUpdate = () => {
    if (this.props.search_keyword.length !== 0) {
      this.saveKeywordOnState();
    }
    this.clearRedirect();
  }
  saveKeywordOnState = () => {
    this.setState({
      keyword: this.props.search_keyword
    })
  }
  clearRedirect = () => {
    this.props.search(this.state.clear_keyword);
  }
  addArtist = () => {
    this.props.addArtist(this.state)
  }
  render() {
    const { auth, search_keyword, artist_list } = this.props;
    console.log(artist_list);
    console.log(artist_list);


    if (!auth.uid) return <Redirect to='/' />

    { this.props.artist_list &&
      return (
        <SearchResult artist_list={artist_list} /> 
      )
    }
  }
}

const mapStateToProps = state => {  
  return {
    auth: state.firebase.auth,
    search_keyword: state.search.keyword,
    artist_list: state.search.artist_results
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // addArtist: artist => dispatch(artistsActions(artist))
    search: keyword => dispatch(searchKeyword(keyword))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
/* <SearchResult onClick={addArtist}/> */