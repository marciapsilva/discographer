export const addArtist = artist => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;

    firestore.collection('recent').add({
      ...artist,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ action: 'ADD_ARTIST', artist });
    }).catch(err => {
      dispatch({ action: 'ADD_ARTIST_ERROR', err })
    })
  }
}