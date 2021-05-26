
const SET_PRODUCTS_CAT = 'SET_PRODUCTS_CAT';
const SET_PRODUCT_CAT = 'SET_PRODUCT_CAT';


  const setProductsCAT = (products) => ({
      type: SET_PRODUCTS_CAT,
      payload: products
  })


  const setProductCAT = (products) => ({
      type: SET_PRODUCT_CAT,
      payload: products
  })

  const INITIAL_STATE = {
    categories: {},
    category: {},
  };

  export const getAllProductsByCategory =(id) => async (dispatch) => {
    const response = await fetch(`/api/categories/${id}`)

    if(!response.ok) {
        const errors = await response.json()
        return {errors}
    }

    const products = await response.json()
    console.log(products, "-----catproducts")

    dispatch(setProductsCAT(products.products))

    // return CatProducts;
}


  export default function categoryReducer (state=INITIAL_STATE, action) {
    switch(action.type) {
     case SET_PRODUCTS_CAT:
            const newState = {};
            action.payload.forEach(product => {
                newState[product.id] = product
            })
            return {...state, categories: newState};

    //   case SET_PRODUCT_CAT:
    //     return {
    //        ...state,
    //       product: action.payload
    //       }
      default:
        return state;
    }
  };
