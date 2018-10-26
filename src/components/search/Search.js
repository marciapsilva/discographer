import React, { Component } from 'react';
import { artistsActions } from '../../store/actions/artistsActions';
import { connect } from 'react-redux';
import SearchResult from '../layout/SearchResult';
import { Redirect } from 'react-router-dom';

class Search extends Component {
  state = {
    artist: 'Queen',
    albums: 14
  }
  addArtist = () => {
    this.props.addArtist(this.state)
  }
  render() {
    const { auth } = this.props;
    console.log(auth);

    //VERIFICAR PORQUE N ESTÁ FUNCIONANDO
    if (!auth.uid) return <Redirect to='/' />

    return (
      <SearchResult />
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // addArtist: artist => dispatch(artistsActions(artist))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);

/* <SearchResult onClick={addArtist}/> */
