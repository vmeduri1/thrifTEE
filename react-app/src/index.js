import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import Cart from './components/Cart'
import configureStore from './store';
import { ChakraProvider } from "@chakra-ui/react"         

// const initialCart = []

const store = configureStore();
store.subscribe(() => {
  const state = store.getState();
  const persist = {
    cart: state.cart,
    total: state.total
  };

  window.localStorage.setItem('state', JSON.stringify(persist));
});


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>

  </React.StrictMode>,
  document.getElementById('root')
);
