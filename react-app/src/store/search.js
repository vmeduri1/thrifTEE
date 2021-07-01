const LOADRESULT = 'search/LOADRESULT'

const loadResult = products => ({
  type: LOADRESULT,
  payload: products,                           // list is the list of result from the back end
  // products
});


export const searchFunc = (query) => async dispatch => {      // param is the searchTerm that a person searches for

  const response = await fetch(`/api/search/${query}`);
  // /api/search/shirt
  if (response.ok) {
    const searchResults = await response.json();    // jsonifed  searchResult, litterally
    dispatch(loadResult(searchResults))
    console.log('++++++searchResults', searchResults)
    return searchResults;
  }
}


//-------------------REDUCER--------------------------//
// const initialState = {
//   'products': {},
// }


const searchReducer = (state = {}, action) => {
  let newState;

  switch (action.type) {
    case LOADRESULT:
      newState = Object.assign({}, state)
      newState.searchResults = action.payload
      // const products = action.payload
      // const searchProducts = {}
      // for (const product in products) {
      //   searchProducts[product.id] = product
      // }
      // return searchProducts
      return newState

    // return { products: [...action.query] }

    default:
      return { ...state };
  }
}

// const searchReducer = (state = [], action) => {
//   switch (action.type) {
//     case LOADRESULT:
//       return { results: [...action.products] }
//     default:
//       return state;
//   }
// }


export default searchReducer;
