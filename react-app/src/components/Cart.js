<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as productActions from '../store/products'
import { getAllProducts } from '../store/products'

const PAGE_CART = 'cart'
const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

export default function Cart() {
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

    const getTotalSum = () => {
        return cart.reduce(
            (sum, { cost, quantity }) => sum + cost * quantity,
            0
        );
    };

    const getCartTotal = () => {
=======

import React from 'react';




export default function Cart({ cart, setCart }) {

    const getTotalSum = () => {
>>>>>>> main
        return cart.reduce(
          (sum, { quantity }) => sum + quantity,
          0
        );
<<<<<<< HEAD
    };

    const clearCart = () => {
        setCart([]);
    };

    const setQuantity = (product, amount) => {
        const newCart = [...cart];
        newCart.find(
            (item) => item.name === product.name
        ).quantity = amount;
        setCart(newCart);
    };

    const removeFromCart = (productToRemove) => {
        setCart(
            cart.filter((product)  => product !== productToRemove)
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
            {/* <h2>Cart {getCartTotal()}</h2> */}
            {cart.length > 0 && (
                <button onClick={clearCart}>Clear Cart</button>
            )}
            <div className="products">
                {cart.map((product, idx) => (
                    <div className="product" key={idx}>
                        <h3>{product.name}</h3>
                        <h4>${product.price}</h4>
                        <input
                            value={product.quantity}
                            onChange={(e) =>
                                setQuantity(
                                    product,
                                    parseInt(e.target.value)
                                )
                            }
                        />
                        <img src={product.image_url} alt={product.name} />
                        <button onClick={() => addToCart(product)}>
                            +
                        </button>
                        <button onClick={() => removeFromCart(product)}>
                            -
                        </button>
                    </div>
                ))}
            </div>
            {/* <div>Total Cost: ${getTotalSum()}</div> */}
        </>
    )
=======
      };

      const clearCart = () => {
        setCart([]);
      };

      const setQuantity = (product, amount) => {
        const newCart = [...cart];
        newCart.find(
          (item) => item.name === product.name
        ).quantity = amount;
        setCart(newCart);
      };

      const removeFromCart = (productToRemove) => {
        setCart(
          cart.filter((product) => product !== productToRemove)
        );
      };



      return (
        <>
          <h1>Cart</h1>

            <button onClick={clearCart}>Clear Cart</button>

          <div>
            {cart.map((product, idx) => (
              <div key={idx}>
                <h3>{product.name}</h3>
                <h4>${product.cost}</h4>
                <input
                  value={product.quantity}
                  onChange={(e) =>
                    setQuantity(
                      product,
                      parseInt(e.target.value)
                    )
                  }
                />
                <img src={product.image} alt={product.name} />
                <button onClick={() => removeFromCart(product)}>
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div>Total Cost: ${getTotalSum()}</div>
        </>
      );

>>>>>>> main
}
