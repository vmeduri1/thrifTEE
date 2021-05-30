const LOADRESULT = 'search/LOADRESULT'

const loadResult = list => ({
  type: LOADRESULT,
  list,                           // list is the list of result from the back end
});


export const searchFunc = (param) => async dispatch => {      // param is the searchTerm that a person searches for

  const response = await fetch(`/api/search/${param}`);
  // /api/search/A-List
  if (response.ok) {
    const searchResults = await response.json();    // jsonifed  searchResult, litterally
    dispatch(loadResult(searchResults))
    return searchResults;
  }
}


//-------------------REDUCER--------------------------//
const initialState = {
  'products': [],
}


const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADRESULT:
      return { products: [...action.list] }
    default:
      return state;
  }
}


export default searchReducer;
