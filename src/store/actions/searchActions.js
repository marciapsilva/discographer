export const searchKeyword = keyword => {  
  return (dispatch, getState) => {
      dispatch({ type: 'SEARCH_KEYWORD', keyword });
  }
}

export const saveArtistResults = list => {
  return (dispatch, getState) => {
      dispatch({ type: 'SAVE_ARTIST_LIST', list });
  }
}