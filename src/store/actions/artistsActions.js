export const addArtist = artist => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;

    firestore.collection('recent').add({
      ...artist,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'ADD_ARTIST', artist });
    }).catch(err => {
      dispatch({ type: 'ADD_ARTIST_ERROR', err })
    })
  }
}