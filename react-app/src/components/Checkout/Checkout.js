import React from 'react';
import "./checkout.css"
import PaymentForm from './PaymentForm'


export default function Checkout({ product }) {


    return (

        <div>
            <div className="header-text">
                <p>Checkout</p>
            </div>

            <div className="cart">
                <div className="cart-wrapper">

                    <div>

                        <div id="form-grid-wrapper">

                            <div className="form-container">  <PaymentForm /></div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
