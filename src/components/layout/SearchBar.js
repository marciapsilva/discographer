import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    content: '',
    redirect: 'false'
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      content: '',
      redirect: 'true'
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="right">
        <div className="input-field">
          <input id="search" type="search" onChange={this.handleChange} required/>
          <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
    )
  }
}

export default SearchBar;