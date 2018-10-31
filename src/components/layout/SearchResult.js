import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addArtist } from '../../store/actions/artistsActions';

class SearchResult extends Component {
  state = {
    artistIndex: '',
    artist: {
      id: '',
      name: '',
      picture: '',
      nb_albums: '', 
      type: ''
    }
  }
  handleClick = async (e) => {
    e.preventDefault();
    await this.setState({
      artistIndex: e.target.attributes.artist_index.value
    })
    await this.getArtistData();
    this.props.addArtist(this.state.artist);
    this.props.redirect();
  }
  getArtistData = () => {
    const artist = this.props.artist_list[this.state.artistIndex];
    this.setState({
      artist: {
        id: artist.id,
        name: artist.name,
        picture: artist.picture,
        nb_albums: artist.nb_albums,
        type: artist.type
      }
    })
  }
  render() {
    return (
      <div className="center container">
        <div className="container">
          <h3>Resultado da busca para "{this.props.keyword}":</h3>
          <div className="row">
            { this.props && this.props.artist_list.map((artist, index) => {
                return (
                  <div className="albums-thumb col s4" key={artist.id}>
                    <img src={artist.picture} alt="Imagem do álbum aqui aqui"/>
                    <p>{artist.name}</p>
                    <p>Álbums lançados: {artist.nb_albums}</p>
                    <button className="btn pink accent-2" artist_index={index} onClick={this.handleClick}>Seguir</button>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addArtist: artist => dispatch(addArtist(artist)),
  }
};

export default connect(null, mapDispatchToProps)(SearchResult);