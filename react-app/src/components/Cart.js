
import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  isOpen,
  onOpen,
  onClose
} from "@chakra-ui/react"




export default function Cart({ cart, setCart }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState("right")

  const getTotalSum = () => {
    return cart.reduce(
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



  return (
    <>

    <div>Hello</div>


             <button onClick={clearCart}>Clear Cart</button>

            {/* <div>
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

            <div>Total Cost: ${getTotalSum()}</div>  */}
        </>
  );

}
