import React from 'react';

const TracksList = props => {
  let trackId = 0;

  return (
    <div className="center container">
      <div className="container">
      {props.tracks && props.tracks.map(track => {
        trackId++;
        return (
          <div className="" key={`${track.type}-${track.id}`}>
            <h4>{trackId}. {track.trackTitle}</h4>
            <p>Artista: {track.trackArtist}</p>
            <p>Álbum: {track.trackAlbum}</p>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default TracksList;