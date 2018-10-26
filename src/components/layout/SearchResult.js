import React from 'react';

const SearchResult = props => {
  return (
    <div className="center container">
      <div className="container">
        <div className="albums-thumb">
          <img src="" alt="Imagem do álbum aqui aqui"/>
          <p>Resultado da busca: {props.keyword}</p>
        </div>
      </div>
    </div>
  )
}

export default SearchResult;