import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchResult from '../layout/SearchResult';
import { Redirect } from 'react-router-dom';
import { searchKeyword } from '../../store/actions/searchActions';

class Search extends Component {
  state = {
    keyword: '',
    clear_keyword: '',
    artist_list: ''
  }
  componentDidMount = () => {
    this.saveKeywordOnState();
    this.clearRedirect();
  }
  componentDidUpdate = async () => {
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
  redirectUser = () => {
    this.props.history.push('/recents/artists');
  }
  render() {
    const { auth, artist_list } = this.props;
    if (!auth.uid) return <Redirect to='/' />

    return (
      <div>
        { artist_list && <SearchResult keyword={this.state.keyword} artist_list={artist_list} redirect={() => this.redirectUser()} /> }
      </div>
    )
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
    search: keyword => dispatch(searchKeyword(keyword))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
