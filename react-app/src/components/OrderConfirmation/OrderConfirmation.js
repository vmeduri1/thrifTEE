import React from 'react';
import {useSelector} from 'react-redux'
import { Container } from "@chakra-ui/react"
import { Grid, GridItem } from "@chakra-ui/react"
import ItemDetail from './ItemDetail'
import * as cartReducer from '../../store/cart'
import { Text } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import { Button, ButtonGroup, Typography } from "@chakra-ui/react"
import './orderConfirmation.css'


export default function OrderConfirmation(){

    const cart = useSelector((state) => state.cart.products)
    console.log('+++++++', cart)
    const userInSession = useSelector(state => state.session.user)

    const handleTotal = (cart) => {
        let total = 0
        cart.map(item => total += (item.regular_price))
        return total.toFixed(2)

    }

    return (

        <Container className="container" maxWidth="600px">
             {cart.map(product => (
        <Grid
        key={product.id}
        >

            <ItemDetail  mb={"10px"} product={product} cart={cart} />
             </Grid>
    ))}

    <Box>
        <Text>
            Order Total: ${handleTotal(cart)}
        </Text>
        <Button>Checkout</Button>
    </Box>

        </Container>


    )
}
