import React from 'react';
import { useSelector } from 'react-redux';
import Cart from '../Cart'

export default function Checkout({ product }) {
    const allProducts = useSelector(state => state.products.products);
    const cart = useSelector(state => state?.cart);

    const cartItems = Object.values(cart);

    // const filteredItems = Object.values(allProducts?.filter(item => item.id === cart[item.id]?.itemId));

    return (
        // Object.values(allProducts).length > 0 &&
        // cartItems.length > 0 &&
        <>
            <div>Hello</div>
            <div className="cart">
                <div className="cart-wrapper">
                    <div className="cart-label">
                        <h2>Items in Your Cart</h2>
                    </div>
                    <div className="cart-container">
                        <div>
                            {/* <Cart /> */}
                        </div>
                        {/* {filteredItems?.map(item => (
                            <div key={item.id} className-="cart-container-item">
                                <div>{item}</div>
                                <button>
                                    Checkout
                                </button>
                            </div>
                        ))} */}
                    </div>
                </div>
            </div>
        </>
    )
}
