
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

  export const removeProduct = products => ({
    type: REMOVE_PRODUCT,
    payload: products
  });

  export const clearProduct = ()=> ({
    type: CLEAR_PRODUCT,
    payload: []
  })




  const initialState = JSON.parse(localStorage.getItem('cart') || '{"products":[]}')
  //initial cart state read from local storage, if nothing at key 'cart' sets cart to be a value of products:[]




  export default function cartReducer (state = initialState, action) {
    switch (action.type) {
        case LOAD_CART:
          return {
            ...state,
            products: action.payload
          };
        case ADD_PRODUCT:
            // alert("Added to Cart")
            if (state.products.some(product => product.id === action.payload.id)) {
              // increase qty if item already exists in cart
              return {
                ...state,
                products: state.products.map(product => (product.id === action.payload.id ? { ...product, qty: product.qty + 1 } : product))
              }
            }
            return {
              ...state,
              products: [...state.products, { ...action.payload, qty: 1 }]

            }; // else add the new item to cart
        case REMOVE_PRODUCT:
          // alert('removed product')
          return {
            products: state.products.filter(product => product.id !== action.payload.id)
          }
        case CLEAR_PRODUCT:
          return {
            products: []
          }
        default:
          return state;
      }
  }
