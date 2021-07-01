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

                    <ItemDetail mb={"10px"} product={product} cart={cart} />
                </Grid>
            ))}

            <Box>
                <Flex>
                    <Text
                        // ml='575px;'
                        // mb='10px'
                        w='800px'
                        ml='482px'
                        mt='15px'
                        mb='15px'
                        bg='red'
                    >
                        {/* Order Total: ${handleTotal(cart)} */}
                        Order Total:
                    </Text>
                    <Text
                        // ml='575px;'
                        // mb='10px'
                        // w='800px'
                        // ml='482px'
                        // mt='15px'
                        // mb='15px'
                        bg='blue'
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
                    Checkout
                </Button>
            </Box>

        </Container>


    )
}
