import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { useDispatch, useSelector } from 'react-redux'
import { VerticallyCenter } from '../modals/Modal'
import {
  Box,
  Grid,
  Link,
  Input,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  GridItem,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react"


const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);
  const events = useSelector(state => state.events);        // pull content out of state
  const dispatch = useDispatch();
  const history = useHistory();


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


  return (
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


    <Grid templateColumns="repeat(12, 1fr)" gap={.5}>
      {/* <Box w="100%" h="20" bg="gray.400" /> */}
      <Box w="100%" h="20" bg="gray.400" />
      <Link href='/' w="100%" h="20" bg="gray.400">Home</Link>
      {/* <NavLink to="/" exact={true} activeClassName="active">Home</NavLink> */}

      <Box w="100%" h="20" bg="gray.400" />
      <form>
        <FormControl id='searchbar' w="300%" h="20" bg="FFFFFF" color='#000000'>
          <Input placeholder="I'm looking for..." />
        </FormControl>
      </form>

      <Box w="100%" h="20" bg="FFFFFF" />
      <Box w="100%" h="20" bg="FFFFFF" />
      <Box w="100%" h="20" bg="gray.400" />
      <Box w="100%" h="20" bg="gray.400" />
      <Box w="100%" h="20" bg="gray.400" />
      <Box w="100%" h="20" bg="gray.400" />
      <VerticallyCenter w="100%" h="20" bg="gray.400" />
      <Box w="100%" h="20" bg="gray.400" />
    </Grid >
  );
}

export default NavBar;
