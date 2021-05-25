import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import HomePage from "./components/HomePage"
import { authenticate } from "./store/session";
import Cart from './components/Cart';

const PAGE_CART = 'cart'
const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

function App() {
  const [cart, setCart] = useState(cartFromLocalStorage);
  const user = useSelector(state => state.session.user)
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  if (!loaded) {
    return null;
  }

  const getCartTotal = () => {
    return cart.reduce(
      (sum, { quantity }) => sum + quantity,
      0
    );
  };

  return (
    <BrowserRouter>
      <NavBar />

      <Switch>
      <Route path="/" exact={true} >
          <HomePage />
        </Route>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <Route path="/users" exact={true} >
          <UsersList />
        </Route>
        <Route path="/users/:userId" exact={true} >
          <User />
        </Route>

      </Switch>
      <div className="App">
        {page === PAGE_CART && (
          <Cart cart={cart} setCart={setCart} />
        )}

      </div>
    </BrowserRouter>
  );
}

export default App;
