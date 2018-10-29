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
    const { auth } = this.props;
    const keyword = this.state.keyword;
    if (!auth.uid) return <Redirect to='/' />

    return (
      <SearchResult keyword={keyword} />
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    search_keyword: state.search.keyword
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