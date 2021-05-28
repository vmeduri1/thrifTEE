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
  Icon,

} from "@chakra-ui/react"

import Cart from '../Cart'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { clearProduct, removeProduct, addProduct } from '../../store/cart'
import { GiShoppingBag } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai'



export default function CartDrawer({ cart }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState("right")
  const dispatch = useDispatch()
  let history = useHistory()



  useEffect(() => {
    onOpen()
  }, [cart])


  function handleCheckout() {
    history.push("/thankyou")
  }


  return (
    <>
      {/* <button onClick={onOpen}>Test</button> */}
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>


          <DrawerHeader borderBottomWidth="1px">Your Basket</DrawerHeader>

          <DrawerBody>



            <Box mb={20} >
              {cart.products.map((product, idx) => (
                <div key={idx}>
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
                  <Box maxW="sm" borderWidth="2px" borderRadius="lg" overflow="hidden" mb={10}
                  >
                    <Box pt={15} pb={15} fontWeight="bold" fontSize="xl">
                      ${product.regular_price}
                      <Image src={product.image_url} alt={product.name} />
                    </Box>
                    <Box p="6" alignItems='baseline'>
                      <Box d='flex'>
                        <Icon as={AiFillCloseCircle} onClick={() => dispatch(removeProduct(product))} mr={4}/>
                        {product.name}
                      </Box>
                      <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xl"
                        textTransform="uppercase"
                        ml="2"
                      >

                      </Box>

                    </Box>

                  </Box>




                </div>
              ))}
            </Box>

            {/* <div>Total Cost: ${getTotalSum()}</div> */}
            <Button colorScheme="teal" variant="outline" mb={5} mr={3} onClick={() => dispatch(clearProduct())}>Clear Cart</Button>
            <Button shopIcon={<GiShoppingBag />} colorScheme="red" variant="outline" ml={3} onClick={handleCheckout} mb={5}>Checkout</Button>

          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );

}
