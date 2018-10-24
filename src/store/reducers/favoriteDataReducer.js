const initState = {
  artists: [
    {id: 1, artistName: 'Queen', albums: 30},
    {id: 2, artistName: 'Fleetwood Mac', albums: 32},
    {id: 3, artistName: 'Led Zeppelin', albums: 20}
  ],
  albums: [
    {id: 1, albumTitle: 'A Kind of Magic', albumArtist: 'Queen', trackNumber: 14},
    {id: 2, albumTitle: 'Rumors', albumArtist: 'Fleetwood Mac', trackNumber: 12},
    {id: 3, albumTitle: 'Led Zeppelin II', albumArtist: 'Led Zeppelin', trackNumber: 10}
  ],
  tracks: [
    {id: 1, trackTitle: 'A Kind of Magic', trackAlbum: 'A Kind of Magic', trackArtist: 'Queen'},
    {id: 2, trackTitle: 'Landslide', trackAlbum: 'Rumors', trackArtist: 'Fleetwood Mac'},
    {id: 3, trackTitle: 'What is and What Should Never Be', trackAlbum: 'Led Zeppelin II', trackArtist: 'Led Zeppelin'}
  ]
}

const favoriteDataReducer = (state = initState, action) => {
  return state;
}

export default favoriteDataReducer;