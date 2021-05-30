import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { useDispatch, useSelector } from 'react-redux'
import { VerticallyCenter } from '../modals/Modal'
import CartDrawer from '../components/Drawer/CartDrawer'
import { FiShoppingCart } from 'react-icons/fi'
import {
  Box,
  Grid,
  Link,
  Input,
  Text,
  Flex,
  Spacer,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  GridItem,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  useDisclosure,
  isOpen,
  onOpen,
  onClose,
  isClose,
  Icon,
  chakra,
  Button,
  Center
} from "@chakra-ui/react"


const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const events = useSelector(state => state.events);        // pull content out of state
  const history = useHistory();

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [flag, setFlag] = useState(false)


  useEffect(() => {
    setFlag(true)
  }, [flag])


  let BtnVisibility;

  if (sessionUser) {          // if user is logged in
    BtnVisibility = (
      <LogoutButton user={sessionUser} />
    )
  } else {                      // if user is NOT LOGGED in
    BtnVisibility = (
      <VerticallyCenter />
    )
  }


  return (
    <>
      {/* {flag ? <CartDrawer /> : null} */}

      <Grid templateColumns="repeat(15, 1fr)" gap={.7} bg="gray.100">
        <Flex w="100%" h="20" />
        <Flex w="100%" h="20" />
        <Flex >
          <Link href='/' w="100%" h="20" textAlign="center" paddingTop={6} fontWeight="bold" _hover={{ color: "white", fontWeight: "bold", bg: "gray.400" }} >thrifTEE</Link>
        </Flex>

        <Link href='/' textAlign="center" paddingTop={6} fontWeight="bold" w="100%" h="20" _hover={{ color: "white", fontWeight: "bold", bg: "gray.400" }} >Shop</Link>
        <Link href='/aboutDevs' textAlign="center" paddingTop={6} fontWeight="bold" w="100%" h="20" _hover={{ color: "white", fontWeight: "bold", bg: "gray.400" }}>About</Link>
        <form>
          <FormControl id='searchbar' w="475%" h="20" bg="FFFFFF" color='#000000' textAlign="center" paddingTop={5}>
            <Input placeholder="I'm looking for..." bg="white" />
          </FormControl>
        </form>
        <Flex w="100%" h="20" bg="FFFFFF" />
        <Flex w="100%" h="20" bg="FFFFFF" />
        <Flex w="100%" h="20" />
        <Flex w="100%" h="20" />
        <Flex w="100%" h="20" textAlign="center" paddingTop={5} >
          <Button onClick={() => setFlag(!flag)} _hover={{ color: "white", fontWeight: "bold", bg: "gray.400" }}>
            <Icon as={FiShoppingCart} h={7} w={7} justifyItems="center" alignItems="center" />
          </Button>
        </Flex>

        <Flex textAlign="center" w="100%" h="20" paddingTop={5} fontWeight="bold" marginRight={3} >
          {/* <VerticallyCenter /> */}
          {BtnVisibility}
        </Flex>
        <Flex textAlign="center" w="100%" h="20" paddingTop={5} fontWeight="bold" marginLeft={3}>
          {/* {logoutBtnVisibility} */}
          {/* <LogoutButton /> */}
        </Flex>

        <Flex w="100%" h="20" />
        <Flex w="100%" h="20" />
      </Grid >
    </>
  );
}

export default NavBar;
