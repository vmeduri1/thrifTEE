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

import Cart from '../Cart'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'


export default function DrawerContainer({ cart }) {
  const cartStatus = useSelector((state) => state.cart)
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const [openDrawer, setOpenDrawer] = useState(isOpen)
  const [placement, setPlacement] = React.useState("right")

  useEffect(() => {
    onOpen()
  }, [cart])


  return (
    <>
      {/* <button onClick={onOpen}>Test</button> */}
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>


          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>

          <DrawerBody>

            {/* <button onClick={clearCart}>Clear Cart</button> */}

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

            <div>Total Cost: ${getTotalSum()}</div> */}

          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );

}
