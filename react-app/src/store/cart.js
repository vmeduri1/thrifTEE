
export const LOAD_CART = 'LOAD_CART';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const UPDATE_CART = 'UPDATE_CART';


export const loadCart = products => ({
    type: LOAD_CART,
    payload: products
  });

  export const addProduct = product => ({
    type: ADD_PRODUCT,
    payload: product
  });

  export const removeProduct = product => ({
    type: REMOVE_PRODUCT,
    payload: product
  });

//   const INITIAL_STATE= JSON.parse(localStorage.getItem('cart') || '[]')

const initialState = {
    products: []
  };

  export default function cartReducer (state = initialState, action) {
    switch (action.type) {
        case LOAD_CART:
          return {
            ...state,
            products: action.payload
          };
        case ADD_PRODUCT:
          return {
            ...state,
            productToAdd: action.payload
          };
        case REMOVE_PRODUCT:
          return {
            ...state,
            productToRemove: action.payload
          };
        default:
          return state;
      }
  }
