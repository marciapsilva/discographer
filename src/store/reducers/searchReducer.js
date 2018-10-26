const initState = { keyword: '' };

const searchReducer = (state = initState, action) => {  
  switch (action.type) {
    case 'SEARCH_KEYWORD': 
      return {
        ...state,
        keyword: action.keyword
      }
    default:
      return state;
  }
}

export default searchReducer;