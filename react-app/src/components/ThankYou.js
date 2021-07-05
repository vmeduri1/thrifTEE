import React, {useState, useEffect} from 'react';
import './ThankYou.css';
import { Box } from "@chakra-ui/react";
import {Heading, Container, Button} from "@chakra-ui/react";

import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'
import * as orderReducer from '../store/order';
// import Footer from '../components/Footer'

function ThankYouFunc() {

  const orders = useSelector(state => state.orders)
  const order = useSelector(state => state.orders.id.products)
  const user = useSelector(state => state.session.user)
  const cart = Object.values(useSelector(state => state.cart.products))
  const dispatch = useDispatch()
  const history = useHistory()


const handleTotal=(order)=> {
  let total = 0;
  order.map(item => total += item.regular_price)
  return total

}

const handleHome=() => {

  history.push('')
}


  return (
    <div className="thank-you-card">
      <Heading as ="h2" size="lg" style={{marginBottom: '1.25em'}}>Thanks for your order, {user.fname}</Heading>
      <div className="order-total">
       <Heading size="md">Order Total: {`$${handleTotal(order)}`}</Heading>

        </div>
      <div>
        {orders.id.products.map((product, idx) => (
          <div key={idx} style={{marginBottom: "1em"}}>

          <p>{`Item no.: ${idx +1}. ${product.name}`} --- {`$${product.regular_price}`} Quantity: 1</p>

        </div>
        ))}
        <Button colorScheme="blue" variant="solid" onClick={handleHome}>Return to Home Page</Button>
      </div>
      </div>



  )

}

export default ThankYouFunc;
