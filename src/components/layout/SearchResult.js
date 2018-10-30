import React from 'react';

const SearchResult = props => {
  // console.log(props.artist_list[0].name);
  return (
    <div className="center container">
      <div className="container">
        <p>Resultado da busca:</p>
        <div className="albums-thumb">
          {/* <img src={props.artist_list[0].picture} alt="Imagem do álbum aqui aqui"/> */}
          {/* <p>{props.artist_list[0].name}</p> */}
        </div>
      </div>
    </div>
  )
}

export default SearchResult;