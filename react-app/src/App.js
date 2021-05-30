import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import HomePage from "./components/HomePage/HomePage"
import Category from "./components/Category/Category"
import SingleProduct from "./components/Product/Product"
import { authenticate } from "./store/session";
import ThankYou from "./components/ThankYou";
import CatNavBar from './components/CatNavBar';
import AboutPage from '../src/components/AboutPage'
import SearchResults from '../src/components/SearchResultPage/SearchResults'
import Footer from '../src/components/Footer'
import { Box } from '@chakra-ui/react'

function App() {
  const user = useSelector(state => state.session.user)
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <CatNavBar />
      <Switch>
        <Route path="/" exact={true} >
          <HomePage />
        </Route>

        <Route path="/categories/:id" exact={true} >
          <Category />
        </Route>

        <Route path="/products/:id" exact={true} >
          <SingleProduct />
        </Route>

        <Route path="/aboutDevs" exact={true} >
          <AboutPage />
        </Route>

        <Route path="/search" exact={true} >
          <SearchResults />
        </Route>

        {/* <Route path="/login" exact={true}>
            <LoginForm />
          </Route>
          <Route path="/sign-up" exact={true}>
            <SignUpForm />
          </Route> */}
        {/* <Route path="/users" exact={true} >
            <UsersList />
          </Route> */}
        {/* <Route path="/users/:userId" exact={true} >
            <User />
          </Route> */}
        <Route path="/thankyou" exact={true} >
          <ThankYou />
          {/* <Footer /> */}
        </Route>

      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
