const initState = {
  artists: [
    {id: 1, artistName: 'Deep Purple', albums: 40, type: 'last-artist'},
    {id: 2, artistName: 'Lady Gaga', albums: 7, type: 'last-artist'},
  ],
  albums: [
    {id: 1, albumTitle: 'Deep Purple in Rock', albumArtist: 'Deep Purple', trackNumber: 7, type: 'last-album'},
    {id: 2, albumTitle: 'Joanne', albumArtist: 'Lady Gaga', trackNumber: 11, type: 'last-album'},
  ],
  tracks: [
    {id: 1, trackTitle: 'Bloodsucker', trackAlbum: 'Deep Purple in Rock', trackArtist: 'Deep Purple', type: 'last-track'},
    {id: 2, trackTitle: 'John Wayne', trackAlbum: 'Joanne', trackArtist: 'Lady Gaga', type: 'last-track'},
  ]
}
const recentDataReducer = (state = initState, action) => {
  // console.log(action);

  switch (action.type) {
    case 'ADD_ARTIST': 
      console.log('artista adicionado', action.artist);
      return state;
    case 'ADD_ARTIST_ERROR':
      console.log('add artist error', action.err);
      return state;
    default:
      return state;
  }
}

export default recentDataReducer;