import React from 'react';

const ArtistList = props => {
  return (
    <div className="center container col s12 row">
      <div className="container row col s12 row">
      {
        props.artists === 'não há artistas' ? (
          <div>
            <p>Você ainda não adicionou nenhum artista.</p>
            <p>Pesquise o artista pelo nome no campo de busca acima para iniciar sua coleção.</p>
          </div>
        ) : (
          props.artists && props.artists.map(artist => {
          return (
            <div className="albums-thumb col s4" key={artist.id}>
              <img src={artist.picture} alt="Imagem do álbum aqui aqui"/>
              <p>{artist.name}</p>
              <p>Álbums, eps e singles lançados: {artist.nb_albums}</p>
            </div>
          )
          })
        )
      }
      </div>
    </div>
  )
}

export default ArtistList;