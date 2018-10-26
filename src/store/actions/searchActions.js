export const searchActions = keyword => {
  console.log(keyword);

  return (dispatch, getState) => {
      dispatch({ type: 'SEARCH_KEYWORD', keyword });
  }
}