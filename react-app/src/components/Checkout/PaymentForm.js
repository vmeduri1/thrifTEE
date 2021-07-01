import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom'
import * as cartReducer from '../../store/cart'
import { Center } from "@chakra-ui/react"
import * as orderReducer from '../../store/order'


import {
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    InputGroup,
    isRequired,
    Stack,
  } from "@chakra-ui/react";




export default function Paymentform() {

  let total;

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
    const history= useHistory()
    const cart = Object.values(useSelector(state => state.cart.products))



    const handlePay=async (total)=> {
        total = handleTotal(cart)

        // e.preventDefault()


        await dispatch(orderReducer.createOrder(total))
        await dispatch(cartReducer.clearProduct())
        history.push('/ThankYou')


      }

      const handleTotal=(cart)=> {
        let total = 0;
        cart.map(item => total += item.regular_price)
        return total

    }





    return (
        <>
        <form onSubmit = {handlePay(total)}>
          <div>
            <ul style={{marginTop: '.25em', marginBottom: '1.25em'}}>
            {errors && errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
          </div>

          <Stack spacing={3}>
            <FormControl isRequired>

              <FormLabel>First Name</FormLabel>
              <InputGroup>
                <Input
                  placeholder="First Name"
                  type='text'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </InputGroup>

              <FormLabel>Last Name</FormLabel>
              <InputGroup>
                <Input

                  placeholder="Last Name"
                  type='text'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </InputGroup>

              <FormLabel>Email</FormLabel>
              <InputGroup>
                <Input
                  placeholder="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>

              <FormLabel>Street Address</FormLabel>
              <InputGroup>
                <Input
                  placeholder="Street Address"
                  value={address1}
                  onChange={(e) => setAddress1(e.target.value)}
                />
              </InputGroup>

              <FormLabel>State</FormLabel>
              <InputGroup>
                <Input
                  placeholder="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </InputGroup>

              <FormLabel>Zip Code</FormLabel>
              <InputGroup>
                <Input
                  placeholder="Zip Code"
                  value={zipcode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </InputGroup>

              <FormLabel>City</FormLabel>
              <InputGroup>
                <Input
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </InputGroup>

              <FormLabel>Country</FormLabel>
              <InputGroup>
                <Input
                  placeholder="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </InputGroup>

              <FormLabel>Credit Card Number</FormLabel>
              <InputGroup>
                <Input
                  placeholder="Credit Card Number"

                />
              </InputGroup>

              <FormLabel>CVV</FormLabel>
              <InputGroup>
                <Input
                  placeholder="CVV"

                />
              </InputGroup>

              <br />
              <div className="total-cart">
                   <p>Order Total: {`$${handleTotal(cart)}`}</p>
                   <Center>
                   <Button type='Submit' onClick={handlePay}>Complete Payment</Button>
                   </Center>

                   </div>


            </FormControl>
          </Stack>
        </form>


        </>
      )
    }
