import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import "./checkout.css"
import { DeleteIcon } from '@chakra-ui/icons'
import { clearProduct, removeProduct} from '../../store/cart'
import { useDispatch } from 'react-redux'
import PaymentForm from './PaymentForm'


export default function Checkout({ product }) {


    const cart = Object.values(useSelector(state => state.cart.products))
    const dispatch = useDispatch()



    return (

        <div>
        <div className="header-text">
            <p>Checkout</p>
            </div>

            <div className="cart">
                <div className="cart-wrapper">
                    <div className="cart-label">
                        <h2>Items in Your Cart</h2>
                    </div>
                    <div>

                        <div id="form-grid-wrapper">

                        <div className="container-checkout">
                            {cart.map(item=> (
                                <>
                                <div style={{width: "75px"}}><img src={item.image_url}></img></div>
                                <div>{item.name}</div>
                                <div>{`$${item.regular_price}`}</div>
                                <div onClick={() => dispatch(removeProduct(item))}><DeleteIcon /></div>
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
