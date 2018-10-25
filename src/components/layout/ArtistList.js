import React from 'react';

const ArtistList = props => {
  return (
    <div className="center container">
      <div className="container">
      {props.artists && props.artists.map(artist => {
        return (
          <div className="" key={`${artist.type}-${artist.id}`}>
            <img src="" alt="Imagem do álbum aqui aqui"/>
            <h4>{artist.artistName}</h4>
            <p>Número de álbums: {artist.albums}</p>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default ArtistList;