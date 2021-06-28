import React from 'react';
import {useSelector} from 'react-redux'
import { Container } from "@chakra-ui/react"
import { Grid, GridItem } from "@chakra-ui/react"
import ItemDetail from './ItemDetail'
import * as cartReducer from '../../store/cart'
import { Text } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react"



export default function OrderConfirmation(){

    const cart = useSelector((state) => state.cart.products)
    console.log('+++++++', cart)
    const userInSession = useSelector(state => state.session.user)

    return (

        <Container maxWidth="600px">
             {cart.map(product => (
        <Grid
        key={product.id}
        >

            <ItemDetail product={product} cart={cart} />
             </Grid>
    ))}

    <Box>
        <Text>
            Order Total:
        </Text>
        <Button>Checkout</Button>
    </Box>

        </Container>


    )
}
