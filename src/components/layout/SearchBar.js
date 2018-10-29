import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchActions } from '../../store/actions/searchActions';

class SearchBar extends Component {
  state = {
    keyword: '',
  }
  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.search(this.state.keyword);
    this.clearInput();

    fetch(`https://api.deezer.com/search/artist/?q="${this.state.keyword}"`)
    .then(res => res.json())
    .then(data => console.log(data));
  }
  handleClick = (e) => {
    this.clearInput();
  }
  clearInput = () => {
    this.setState({
      keyword: '',
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} onClick={this.handleClick} className="right">
        <div className="input-field" id="search-input">
          <input id="search" type="search" onChange={this.handleChange} value={this.state.keyword} required/>
          <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
          <i className="material-icons" onClick={this.handleClick}>close</i>
        </div>
      </form>
    )
  }
};

const mapDispatchToProps = dispatch => {
  return {
    // addArtist: artist => dispatch(artistsActions(artist))
    search: keyword => dispatch(searchActions(keyword)),
  }
};

export default connect(null, mapDispatchToProps)(SearchBar);