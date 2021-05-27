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
import {useState, useEffect} from 'react'
import {useSelector}  from 'react-redux'


export default function DrawerContainer({ cart, setCart }) {
    const cartStatus = useSelector((state) => state.cart)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [openDrawer, setOpenDrawer] = useState(onClose)
    const [placement, setPlacement] = React.useState("right")

    useEffect(() => {
        // alert('use effect')
        setOpenDrawer(isOpen)
    }, [cartStatus])

  return (
    <>
    <button onClick={onOpen}>Test</button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>


          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>

          <DrawerBody>
              <Cart />

          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );

}
