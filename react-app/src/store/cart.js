
export const LOAD_CART = 'LOAD_CART';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const UPDATE_CART = 'UPDATE_CART';
export const CLEAR_PRODUCT = 'CLEAR_PRODUCT'


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

  export const clearProduct = product => ({
    type: CLEAR_PRODUCT,
    payload: []
  })

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
            alert("Added to Cart")
            if (state.some(product => product.id === action.payload.id)) {
              // increase qty if item already exists in cart
              return state.map(product => (product.id === action.payload.id ? { ...product, qty: product.qty + 1 } : product));
            }
            return [...state, { ...action.payload, qty: 1 }]; // else add the new item to cart
        case REMOVE_PRODUCT:
          return state.filter(product => product.id !== action.payload.id)
        case CLEAR_PRODUCT:
          return {
            products: []
          }
        default:
          return state;
      }
  }
