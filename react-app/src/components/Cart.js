
import { Button } from '@material-ui/core';
import React from 'react';




export default function Cart({ cart, setCart }) {

    const getTotalSum = () => {
        return cart?.reduce(
          (sum, { quantity }) => sum + quantity,
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
      ).quantity = amount;
      setCart(newCart);
    };

    const removeFromCart = (productToRemove) => {
      setCart(
        cart.filter((product) => product !== productToRemove)
      );
    };

      // const goToCheckout = e => {
      //   history.push(`/checkout/${props.cart.id}`)
      //   localStorage.setItem('cart-id', props.cart.id)
      //   props.setModalOpen(false)
      //   props.setCheckout(true)
      // }



      return (
        <>
          {/* <Button
            floated='left'
            size='big'
            color='blue'
            onClick={goToCheckout}
          >
            Checkout
          </Button> */}
          <h1>Cart</h1>

            <button onClick={clearCart}>Clear Cart</button>

          <div>
            {cart?.map((product, idx) => (
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

}
