import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch} from "react-redux";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import HomePage from "./components/HomePage/HomePage"
import Category from "./components/Category/Category"
import SingleProduct from "./components/Product/Product"
import { authenticate } from "./store/session";
import ThankYou from "./components/ThankYou";
import CatNavBar from './components/CatNavBar';
import AboutPage from '../src/components/AboutPage'
import SearchResults from '../src/components/SearchResultPage/SearchResults'
import Footer from '../src/components/Footer'
import OrderConfirmation from './components/OrderConfirmation/OrderConfirmation'
import Checkout from '../src/components/Checkout/Checkout'
import NotFound from '../src/components/NotFound/NotFound'

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <CatNavBar />
      <Switch>
        <Route path="/" exact >
          <HomePage />
        </Route>

        <Route path="/categories/:id" exact >
          <Category />
        </Route>

        <Route path="/products/:id" exact>
          <SingleProduct />
        </Route>

        <Route path="/aboutDevs" exact>
          <AboutPage />
        </Route>

        <Route path="/search/:query" exact>
          <SearchResults />
        </Route>
        <Route path="/confirm" exact>
          <OrderConfirmation />
        </Route>
        <ProtectedRoute path="/checkout" exact>
          <Checkout />
        </ProtectedRoute>
        <ProtectedRoute path="/thankyou" exact >
          <ThankYou />
        </ProtectedRoute>
        <Route component={NotFound}></Route>

      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
