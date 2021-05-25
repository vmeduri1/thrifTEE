

  export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
  export const FETCH_PRODUCT = 'FETCH_PRODUCT';
  export const SET_PRODUCTS = 'SET_PRODUCTS';
  export const SET_PRODUCT = 'SET_PRODUCT';

  // const fetchProducts = () => ({
  //     type: FETCH_PRODUCTS,
  //     payload: products
  // })

  const setProducts = (products) => ({
      type: SET_PRODUCTS,
      payload: products
  })

  // const fetchProduct = (id) => ({
  //     type: FETCH_PRODUCT,
  //     payload: product
  // })

  const setProduct = (product) => ({
      type: SET_PRODUCT,
      payload: product
  })

  const INITIAL_STATE = {
    products: [],
    product: {},
  };

  export const getAllProducts =() => async (dispatch) => {
    const response = await fetch('/api/products/')

    if(!response.ok) {
        const errors = await response.json()
        return {errors}
    }

    const products = await response.json()

    dispatch(setProducts(products.products))

    return products;
}

export const getAllProductsByCategory =(id) => async (dispatch) => {
    const response = await fetch(`/api/products/categories/${id}`)

    if(!response.ok) {
        const errors = await response.json()
        return {errors}
    }

    const products = await response.json()

    dispatch(setProducts(products.products))

    return products;
}




  export default function productsReducer (state=INITIAL_STATE, action) {
    switch(action.type) {
      case FETCH_PRODUCTS:
        return {
          ...state,
          products: action.payload
        }
      case SET_PRODUCTS:
        return {
          ...state,
          products: action.payload
        }
      case FETCH_PRODUCT:
        return {
          ...state,
          product: action.payload
          }
      case SET_PRODUCT:
        return {
           ...state,
          product: action.payload
          }
      default:
        return state;
    }
  };
