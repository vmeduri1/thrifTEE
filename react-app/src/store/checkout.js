import some from 'lodash/some';

export const AppConstants = {
    CHECKOUT: {
        ADD_PRODUCT: 'CHECKOUT_ADD_PRODUCT',
        REMOVE_PRODUCT: 'CHECKOUT_REMOVE_PRODUCT'
    }
}

const initialProductState = {
    items: [],
    totalPrice: 0
}

const addItems = (items = [], payload) => {
    const newItems = items.map(item => item);
    if (!some(items, e => e._id === payload._id)) {
        newItems.push(payload)
    }
    return newItems;
}

const removeItems = (items = [], id) => {
    const newItems = items.map(item => item);
    newItems.every((e, index) => {
        if (e._id === id) {
            newItems.splice(index, 1);
            return false;
        }
        return true;
    })
    return newItems;
}

function checkoutReducer(state = initialProductState, action) {
    switch(action.type) {
        case AppConstants.CHECKOUT.ADD_PRODUCT:
            return {
                ...state,
                items: addItems(state.items, action.payload)
            };
        case AppConstants.CHECKOUT.REMOVE_PRODUCT:
            return {
                ...state,
                items: removeItems(state.items, action.payload)
            };
        default:
            return state;
    }
}

export default checkoutReducer;
