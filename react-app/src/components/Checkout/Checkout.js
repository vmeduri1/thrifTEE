import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import "./checkout.css"
import { DeleteIcon } from '@chakra-ui/icons'
import { clearProduct, removeProduct } from '../../store/cart'
import { useDispatch } from 'react-redux'


export default function Checkout({ product }) {

    const [errors, setErrors] = useState([]);
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [address1, setAddress1] = useState('')
    const [zip_code, setZipCode] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const cart = Object.values(useSelector(state => state.cart.products))
    const dispatch = useDispatch()

    const handleTotal = (cart) => {
        let total = 0;
        cart.map(item => total += item.regular_price)
        return total

    }


    return (

        <>
            <div className="header-text">
                <p>Checkout</p>
            </div>

            <div className="cart">
                <div className="cart-wrapper">
                    <div className="cart-label">
                        <h2>Items in Your Cart</h2>
                    </div>
                    <div >
                        {/* <div style={{width:"75px", display:'flex'}}>
                            {cart.map(product => (
                                 <div className="img-container"><img src={product.image_url}/></div>
                            ))}
                        </div> */}

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
                        <div className="total-cart"> Order Total: {`$${handleTotal(cart)}`}</div>


                    </div>
                </div>
            </div>
        </>
    )
}
