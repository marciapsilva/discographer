import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchKeyword, saveArtistResults } from '../../store/actions/searchActions';

class SearchBar extends Component {
  state = {
    keyword: '',
    artistList: [],
  }
  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    this.props.search(this.state.keyword);
    this.clearInput();
    this.clearArtistList();
    await this.getArtistData();
  }
  handleClick = (e) => {
    this.clearInput();
  }
  clearInput = () => {
    this.setState({
      keyword: '',
    });
  }
  clearArtistList = () => {
    this.setState({
      artistList: []
    });
  }
  getArtistData = () => {
    fetch(`https://api.deezer.com/search/artist/?q="${this.state.keyword}"`)
    .then(res => res.json())
    .then(data => {      
      data['data'].map(artist => {
        if (artist.radio) {
          let artistList = [...this.state.artistList];
          artistList.push({
            id: artist.id,
            name: artist.name,
            type: artist.type,
            picture: artist.picture_medium,
            nb_albums: artist.nb_album
          });
          this.setState({artistList});
        }
      })
    })
    .then(() => {
      this.props.save(this.state.artistList);
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
    search: keyword => dispatch(searchKeyword(keyword)),
    save: list => dispatch(saveArtistResults(list)),
  }
};

export default connect(null, mapDispatchToProps)(SearchBar);