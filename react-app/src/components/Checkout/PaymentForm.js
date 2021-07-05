import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import * as cartReducer from '../../store/cart'
import { Center } from "@chakra-ui/react"
import * as orderReducer from '../../store/order'
import {
  Button,
  FormLabel,
  Input,
  InputGroup,
  Stack,
} from "@chakra-ui/react";



export default function Paymentform() {



  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [address1, setAddress1] = useState('')
  const [zipcode, setZipCode] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()
  const cart = Object.values(useSelector(state => state.cart.products))



  const handlePay = async (e) => {

    e.preventDefault(e)
    await dispatch(orderReducer.createOrder())
    await dispatch(cartReducer.clearProduct())
    history.push('/ThankYou')

  }

  const handleTotal = (cart) => {
    let total = 0;
    cart.map(item => total += item.regular_price)
    return total

  }


  return (
    <>
      <form onSubmit={handlePay}>
        <div>
          <ul style={{ marginTop: '.25em', marginBottom: '1.25em' }}>
            {errors && errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
        </div>


        <Stack spacing={3}>
          <p>*Required fields</p>
          <FormLabel>First Name*</FormLabel>

          <InputGroup>
            <Input
              placeholder="First Name"
              type='text'
              value={firstName}
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </InputGroup>

          <FormLabel>Last Name*</FormLabel>
          <InputGroup>
            <Input
              required
              placeholder="Last Name"
              type='text'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </InputGroup>

          <FormLabel>Email*</FormLabel>
          <InputGroup>
            <Input
              required
              placeholder="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>

          <FormLabel>Street Address*</FormLabel>
          <InputGroup>
            <Input
              required
              placeholder="Street Address"
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
            />
          </InputGroup>

          <FormLabel>State*</FormLabel>
          <InputGroup>
            <Input
              required
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </InputGroup>

          <FormLabel>Zip Code*</FormLabel>
          <InputGroup>
            <Input
              required
              placeholder="Zip Code"
              value={zipcode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </InputGroup>

          <FormLabel>City*</FormLabel>
          <InputGroup>
            <Input
              placeholder="City"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </InputGroup>

          <FormLabel>Country*</FormLabel>
          <InputGroup>
            <Input
              placeholder="Country"
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </InputGroup>

          <FormLabel>Credit Card Number*</FormLabel>
          <InputGroup>
            <Input
              required
              placeholder="Credit Card Number"

            />
          </InputGroup>

          <FormLabel>CVV*</FormLabel>
          <InputGroup>
            <Input
              required
              placeholder="CVV"

            />
          </InputGroup>


          <div className="total-cart">
            <p>Order Total: {`$${handleTotal(cart)}`}</p>
            <Center>
              <Button type='Submit' bg='#f56565' fontWeight='700' cursor="pointer">Complete Payment</Button>
            </Center>

          </div>



        </Stack>
      </form>


    </>
  )
}
