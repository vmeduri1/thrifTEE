import React, { useState } from 'react';

export default function Cart({ cart, setCart }) {
    const getTotalSum = () => {
        return cart.reduce(
            (sum, { cost, quantity }) => sum + cost * quantity,
            0
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    const setQuantity = (product, amount) => {
        const newCart = [...cart];
        newCart.find(
            (item) => item.name === product.name
        ).quantity = amoun;
        setCart(newCart);
    };

    const removeFromCart = (productToRemove) => {
        setCart(
            cart.filter((product)  => product !== productToRemove)
        );
    };

    return (
        <>
            <h1>Cart</h1>
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
                        <button onClick={() => removeFromCart(product)}>
                            Remove from Cart
                        </button>
                    </div>
                ))}
            </div>

            <div>Total Cost: ${getTotalSum()}</div>
        </>
    )
}
