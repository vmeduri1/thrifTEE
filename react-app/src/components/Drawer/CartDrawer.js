import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Box,
  Image,
  Button,
  Icon,
} from "@chakra-ui/react"

import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearProduct, removeProduct} from '../../store/cart'
import { AiFillCloseCircle } from 'react-icons/ai'



export default function CartDrawer(props) {

  const dispatch = useDispatch()
  let history = useHistory()


  function handleCheckout() {
    history.push("/confirm")
  }


  return (
    <>

      <Drawer
      {...props}
       >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Your Basket</DrawerHeader>
          <DrawerBody>

            <Box mb={20} >
              {props.cart.products.map((product, idx) => (
                <div key={product.id}>

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
            <Button colorScheme="red" variant="outline" ml={3} onClick={handleCheckout} mb={5}>Checkout</Button>

          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );

}
