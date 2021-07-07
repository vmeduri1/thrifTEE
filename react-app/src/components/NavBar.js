import React, { useState, useEffect } from 'react';

import LogoutButton from './auth/LogoutButton';
import { useSelector } from 'react-redux'
import { VerticallyCenter } from '../modals/SignUpModal'
import { VerticallyCenter2 } from '../modals/LogInModal'
import SearchLogic from '../components/Search/SearchLogic'
import { FiShoppingCart } from 'react-icons/fi'
import {
  Grid,
  Link,
  Flex,
  Icon,
  Button,

} from "@chakra-ui/react"


const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);
  const [flag, setFlag] = useState(false)


  useEffect(() => {
    setFlag(true)
  }, [flag])


  let BtnVisibility1;
  let BtnVisibility2;

  if (sessionUser) {          // if user is logged in
    BtnVisibility1 = (
      <LogoutButton user={sessionUser} />
    )
  } else {                      // if user is NOT LOGGED in
    BtnVisibility1 = (
      <VerticallyCenter />                  // SignUpModal
    )
    BtnVisibility2 = (
      <VerticallyCenter2 />                 // LogInModal
    )
  }


  return (
    <>
      <Grid templateColumns="repeat(15, 1fr)" gap={.7} bg="#FFFFF">
        <Flex w="100%" h="20" />
        <Flex w="100%" h="20" />
        <Flex >
          <Link href='/' w="100%" h="20" textAlign="center" paddingTop={8} fontWeight="bold" _hover={{ color: "white", fontWeight: "bold", bg: "gray.400" }} >thrifTEE</Link>
        </Flex>

        <Link href='/' textAlign="center" paddingTop={8} fontWeight="bold" w="100%" h="20" _hover={{ color: "white", fontWeight: "bold", bg: "gray.400" }} >Shop</Link>
        <Link href='/aboutDevs' textAlign="center" paddingTop={8} fontWeight="bold" w="100%" h="20" _hover={{ color: "white", fontWeight: "bold", bg: "gray.400" }}>About</Link>

        <SearchLogic />
        <Flex w="100%" h="20" bg="FFFFFF" />
        <Flex w="100%" h="20" bg="FFFFFF" />
        <Flex w="100%" h="20" />
        <Flex w="100%" h="20" />

        <Flex w="100%" h="20" textAlign="center" paddingTop={5} >
          <Button onClick={() => setFlag(!flag)} _hover={{ color: "white", fontWeight: "bold", bg: "gray.400" }} colorScheme="white" variant="ghost">
            <a href='/confirm'><Icon as={FiShoppingCart} h={7} w={7} justifyItems="center" alignItems="center" /></a>
          </Button>
        </Flex>

        <Flex textAlign="center" w="100%" h="20" paddingTop={5} fontWeight="bold" marginRight={3} >
          {/* {BtnVisibility} */}
          {BtnVisibility1}
        </Flex>
        <Flex textAlign="center" w="100%" h="20" paddingTop={5} fontWeight="bold" marginLeft={3}>
          {/* {logoutBtnVisibility} */}
          {/* <LogoutButton /> */}
          {BtnVisibility2}
        </Flex>

        <Flex w="100%" h="20" />
        <Flex w="100%" h="20" />
      </Grid >
    </>
  );
}

export default NavBar;
