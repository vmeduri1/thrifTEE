import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import "./checkout.css"
import { DeleteIcon } from '@chakra-ui/icons'
import { clearProduct, removeProduct } from '../../store/cart'
import { useDispatch } from 'react-redux'
import PaymentForm from './PaymentForm'

https://github.com/vmeduri1/thrifTEE/pull/33/conflict?name=react-app%252Fsrc%252Fcomponents%252FCheckout%252FCheckout.js&ancestor_oid=a0b0b7cdb89233104463e41881fdca7db7d1357c&base_oid=2311368274dcea9ba61b5c5c79350acf6767346a&head_oid=66668abb7799064d0a7b932aad6c444df095f3f9
export default function Checkout({ product }) {


    const cart = Object.values(useSelector(state => state.cart.products))
    const dispatch = useDispatch()

 checkoutPage

    const handleTotal = (cart) => {
        let total = 0;
        cart.map(item => total += item.regular_price)
        return total

    }
main


    return (

checkoutPage
        <div>
        <div className="header-text">
            <p>Checkout</p>

        <>
            <div className="header-text">
                <p>Checkout</p>
 main
            </div>

            <div className="cart">
                <div className="cart-wrapper">
                    <div className="cart-label">
                        <h2>Items in Your Cart</h2>
                    </div>
                    <div>

                        <div id="form-grid-wrapper">

                        <div className="container-checkout">
                            {cart.map(item => (
                                <>
                                    <div style={{ width: "75px" }}><img src={item.image_url}></img></div>
                                    <div>{item.name}</div>
                                    <div>{`$${item.regular_price}`}</div>
                                    <div onClick={() => dispatch(removeProduct(item))}><DeleteIcon cursor='pointer' /></div>
                                </>
                            ))}

                        </div>

                        <div className="form-container">  <PaymentForm /></div>


                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}
