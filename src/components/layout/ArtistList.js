import React from 'react';

const ArtistList = props => {
  return (
    <div className="center container">
      <div className="container">
      {props.artists && props.artists.map(artist => {
        return (
          <div className="albums-thumb" key={artist.id}>
            <img src={artist.picture} alt="Imagem do álbum aqui aqui"/>
            <p>{artist.name}</p>
            <p>Álbums lançados: {artist.nb_albums}</p>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default ArtistList;