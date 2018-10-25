import React from 'react';

const AlbumsList = props => {
  return (
    <div className="center container">
      <div className="container">
      {props.albums && props.albums.map(album => {
        return (
          <div className="" key={`${album.type}-${album.id}`}>
            <img src="" alt="Imagem do álbum aqui aqui"/>
            <h4>{album.albumTitle}</h4>
            <p>Artista: {album.albumArtist}</p>
            <p>Número de faixas: {album.trackNumber}</p>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default AlbumsList;