import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as sessionActions from '../store/session'
import * as productActions from '../store/products'
import { getAllProducts } from '../store/products'
import Cart from './Cart'


const PAGE_CART = 'cart'

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')


export default function HomePage() {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);
    const allProducts = useSelector((state) => state.products.products);
    const [cart, setCart] = useState(cartFromLocalStorage);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch])


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    // const getTotalSum = () => {
    //     return cart.reduce(
    //         (sum, { cost, quantity }) => sum + cost * quantity,
    //         0
    //     );
    // };

    // const getCartTotal = () => {
    //     return cart.reduce(
    //         (sum, { quantity }) => sum + quantity,
    //         0
    //     );
    // };

    // const clearCart = () => {
    //     setCart([]);
    // };

    // const setQuantity = (product, amount) => {
    //     const newCart = [...cart];
    //     newCart.find(
    //         (item) => item.name === product.name
    //     ).quantity = amount;
    //     setCart(newCart);
    // };

    const removeFromCart = (productToRemove) => {
        setCart(
            cart.filter((product) => product !== productToRemove)
        );
    };

    const addToCart = (product) => {
        let newCart = [...cart]
        let itemInCart = newCart.findIndex(
            (item) => product.name === item.name
        );
        newCart.push(itemInCart);
        setCart(newCart);
    }


    return (
            <>
                <div className="card" style = {{width: '18rem'}}>
                    {allProducts.map(product => (
                        <div>
                        <img src={product.image_url} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="product-name">{product.name}</h5>
                                <h5 class="product-price">{product.price}</h5>
                                <p class="card-text">{product.description}</p>
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                <button onClick={() => addToCart(product)}>
                                    +
                                </button>
                                <button onClick={() => removeFromCart(product)}>
                                    -
                                </button>
                                <Cart />
                            </div>
                        </div>
                    ))}
                </div>
            </>
    )
}
