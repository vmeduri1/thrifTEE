
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


    if(!state.cart.products.length) return;

    const products = state.cart.products

    const user = state.session.user.id;

    const response = await fetch("/api/orders/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "user_id": user,
	      "products": products,

      }),
    });
    const data = await response.json();
    if (data.errors) {
        return data;
    }


    dispatch(createOrderAction(data))

    return data
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
