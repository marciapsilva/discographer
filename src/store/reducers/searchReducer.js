const initState = { 
  keyword: '', 
  redirect: false,
  artist_results: ''
};

const searchReducer = (state = initState, action) => {  
  switch (action.type) {
    case 'SEARCH_KEYWORD': 
      return {
        ...state,
        keyword: action.keyword
      }
    case 'SAVE_ARTIST_LIST':
      return {
        ...state,
        artist_results: action.list
      }
    default:
      return state;
  }
}

export default searchReducer;