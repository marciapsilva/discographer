const initState = {
  artists: [
    {id: 1, artistName: 'Deep Purple', albums: 40},
    {id: 2, artistName: 'Lady Gaga', albums: 7},
  ],
  albums: [
    {id: 1, albumTitle: 'Deep Purple in Rock', albumArtist: 'Deep Purple', trackNumber: 7},
    {id: 2, albumTitle: 'Joanne', albumArtist: 'Lady Gaga', trackNumber: 11},
  ],
  tracks: [
    {id: 1, trackTitle: 'Bloodsucker', trackAlbum: 'Deep Purple in Rock', trackArtist: 'Deep Purple'},
    {id: 2, trackTitle: 'John Wayne', trackAlbum: 'Joanne', trackArtist: 'Lady Gaga'},
  ]
}
const recentDataReducer = (state = initState, action) => {
  return state;
}

export default recentDataReducer;