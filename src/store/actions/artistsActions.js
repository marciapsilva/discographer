export const addArtist = artist => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('recent').add({
      ...artist,
      authorFirstName: 'Marcia',
      authorLastName: 'Silva',
      authorId: 1234,
      createdAt: new Date()
    }).then(() => {
      dispatch({ action: 'ADD_ARTIST', artist });
    }).catch(err => {
      dispatch({ action: 'ADD_ARTIST_ERROR', err })
    })
  }
}