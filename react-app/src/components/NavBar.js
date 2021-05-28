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
  Button
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
  
  return (
    <>
      {flag ? <CartDrawer /> : null }
      <Grid templateColumns="repeat(15, 1fr)" gap={.5}>
        <Box w="100%" h="20" bg="gray.400">
        </Box>
        <Box w="100%" h="20" bg="gray.400" />
        <Flex>
          <Link href='/' align={'center'} justifyContent='center' w="100%" h="20" bg="gray.400" align={'center'}>thrifTEE</Link>
        </Flex>
        {/* <NavLink to="/" exact={true} activeClassName="active">Home</NavLink> */}

        <Link href='/' align={'center'} justifyContent='center' w="100%" h="20" bg="gray.400">Shop</Link>
        <Link href='/' align={'center'} justifyContent='center' w="100%" h="20" bg="gray.400">About</Link>
        <form>
          <FormControl id='searchbar' w="300%" h="20" bg="FFFFFF" color='#000000'>
            <Input placeholder="I'm looking for..." />
          </FormControl>
        </form>
        <Box w="100%" h="20" bg="FFFFFF" />
        <Box w="100%" h="20" bg="FFFFFF" />
        <Box w="100%" h="20" bg="gray.400" />
        <Box w="100%" h="20" bg="gray.400" />
        <Flex w="100%" h="20" bg="gray.400" >
          <Button onClick={() => setFlag(!flag)}>
            <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'}/>
          </Button>
        </Flex>
        <VerticallyCenter w="100%" h="20" bg="gray.400" />
        <LogoutButton w="100%" h="20" bg="gray.400" />
        <Box w="100%" h="20" bg="gray.400" />
        <Box w="100%" h="20" bg="gray.400" />
      </Grid >
    </>
  );
}

export default NavBar;

// WENT BEFORE THE RETURN STATMENT

  // useEffect(() => {
  //   dispatch(cart())                       // RUN THUNK TO GET
  // }, [dispatch])

  // if (sessionUser) {            // if session is logged in, then show profile button
  //   sessionLinks = (
  //     <ProfileButton user={sessionUser} />                  // using the profile button component here
  //   );
  // } else {                  // else, show login and signup buttons instead
  //   sessionLinks = (
  //     <>
  //       <div className='link-btn-container'>
  //         <div className={'LogInBtn-container'}>
  //           <LoginFormModal />
  //         </div>

  //         <div className={'signInBtn-container'}>
  //           <SignUpFormModal />
  //         </div>
  //         {/* <NavLink to="/signup">Sign Up</NavLink> */}
  //       </div>
  //     </>
  //   );
  // }

  ////////////////////////////////////////////////////

// WENT IN THE RETURN STATMENT

  // <nav>
    //   <ul>
    //     <li>
    //       <NavLink to="/" exact={true} activeClassName="active">
    //         Home
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/login" exact={true} activeClassName="active">
    //         Login
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/sign-up" exact={true} activeClassName="active">
    //         Sign Up
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/users" exact={true} activeClassName="active">
    //         Users
    //       </NavLink>
    //     </li>
    //     <li>
    //       <LogoutButton />
    //     </li>
    //   </ul>
    // </nav>