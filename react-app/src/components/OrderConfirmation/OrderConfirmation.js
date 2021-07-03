import React from 'react';
import { useSelector } from 'react-redux'
import { Container } from "@chakra-ui/react"
import { Grid, GridItem } from "@chakra-ui/react"
import ItemDetail from './ItemDetail'
import * as cartReducer from '../../store/cart'
import { Text } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import { Button, ButtonGroup, Typography, Flex } from "@chakra-ui/react"
import './orderConfirmation.css'


export default function OrderConfirmation() {

    const cart = useSelector((state) => state.cart.products)

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

                    <ItemDetail mb={"10px"} product={product} cart={cart} />
                </Grid>
            ))}

            <Box>
                <Flex
                    w='800px'
                    justifyContent='center'
                    alignItems='center'
                >
                    <Text
                        ml='305px'
                        mt='15px'
                        mb='15px'
                    >
                        {/* Order Total: ${handleTotal(cart)} */}
                        Order Total:
                    </Text>
                    <Text
                        ml='5px'
                        fontWeight='700'
                    >
                        ${handleTotal(cart)}
                    </Text>
                </Flex>
                <Button
                    bg='rgb(207, 17, 44)'
                    color='white'
                    ml='525px;'
                    mb='25px'
                >
                    <a href='/checkout'>Checkout</a>
                </Button>
            </Box>

        </Container>


    )
}
