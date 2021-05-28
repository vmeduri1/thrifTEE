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
  onClose,
  Box,
  Image,
  Center,
  Button,
  Icon
} from "@chakra-ui/react"

import Cart from '../Cart'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { clearProduct, removeProduct, addProduct } from '../../store/cart'
import { GiShoppingBag } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai'



export default function CartDrawer({ cart }) {
  // const cartStatus = useSelector((state) => state.cart)
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const [openDrawer, setOpenDrawer] = useState(isOpen)
  const [placement, setPlacement] = React.useState("right")
  const dispatch = useDispatch()
  let history = useHistory()

  // const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')



  useEffect(() => {
    onOpen()
  }, [cart])


  // useEffect(() => {
  //     localStorage.setItem('cart', JSON.stringify(cart))
  // }, [cart])

  function handleCheckout() {
    history.push("/checkout")
  }


  return (
    <>
      {/* <button onClick={onOpen}>Test</button> */}
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>


          <DrawerHeader borderBottomWidth="1px">Your Basket</DrawerHeader>

          <DrawerBody>
            <div> Hello</div>



            {/* <div display='flex'>
              {cart.products.map((product, idx) => (
                <div key={idx}> */}
            {/* <h3>{product.name}</h3>
                  <h4>${product.regular_price}</h4> */}
            {/* <input
                    value={product.quantity}
                    onChange={(e) =>
                      setQuantity(
                        product,
                        parseInt(e.target.value)
                      )
                    }
                  /> */}
            {/* eturn ( */}
            {/* <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden"
                  >
                    <Box>
                      ${product.regular_price}
                      <Image src={product.image_url} alt={product.name} />
                    </Box>
                    <Box p="6" alignItems='baseline'>
                      <Box d='flex'>
                        <Icon as={AiFillCloseCircle} onClick={() => dispatch(removeProduct(product))} />
                        {product.name}
                      </Box>
                      <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                      >

                      </Box>

                    </Box>

                  </Box>




                </div>
              ))}
            </div> */}

            {/* <div>Total Cost: ${getTotalSum()}</div> */}
            {/* <Button colorScheme="teal" variant="outline" onClick={() => dispatch(clearProduct())}>Clear Cart</Button> */}
            {/* <Button shopIcon={<GiShoppingBag />} colorScheme="red" variant="outline" onClick={handleCheckout}>Checkout</Button> */}

          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );

}
