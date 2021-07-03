
export const CREATE_ORDER = 'CREATE_ORDER';
export const GET_ORDERS= 'GET_ORDERS';


const createOrderAction = (data) => ({
    type: CREATE_ORDER,
    payload: data
})

const setOrdersActionCreator = (data) => ({
  type: GET_ORDERS,
  payload: data
})



export const createOrder = (total) => async (dispatch, getState)   => {

    const state = getState();
    const cart = Object.values(state.cart.products)
    console.log('+++++++cart', cart)
    // if(!cart.products.length) return;

    const products = state.cart.products
    // let total = 75
    // total = cart.map(item=> total += item.regular_price)

    const user = state.session.user.id;

    const response = await fetch("/api/orders/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "user_id": user,
	      "products": products,
        "total": total
      }),
    });
    const data = await response.json();
    if (data.errors) {
        return data;
    }


    dispatch(createOrderAction(data))
    return data
  }


export const getOrders =() => async(dispatch, getState) => {
  const state = getState();
  const user = state.session.user.id;

  const response = await fetch("/api/orders/")

  if (response.ok){
    const data = await response.json();
    dispatch(setOrdersActionCreator(data))
    return data
  } else {
    return null
  }
}

export default function (state=null, action) {
    switch(action.type) {
      case CREATE_ORDER:
        return {
          ...state,
          id: action.payload
        }
      case GET_ORDERS:
        return {
          ...state,
          orders: action.payload
        }

      default:
        return state;
    }
  };
