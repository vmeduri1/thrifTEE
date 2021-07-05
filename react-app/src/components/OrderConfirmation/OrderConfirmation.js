import React from 'react';
import './orderConfirmation.css'
import { useSelector } from 'react-redux'
import { Container } from "@chakra-ui/react"
import { Grid} from "@chakra-ui/react"
import { useHistory } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { Text } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import { Button, Flex } from "@chakra-ui/react"



export default function OrderConfirmation() {

    const cart = useSelector((state) => state.cart.products)
    const user = useSelector(state => state.session.user)
    const history = useHistory();



    const handleTotal = (cart) => {
        let total = 0
        cart.map(item => total += (item.regular_price))
        return total.toFixed(2)

    }

    const handleCheckout = () => {

        history.push('/checkout')
    }

    return (
        <>
        {!user &&
          <Box>
              <Text
               align='center'
               mt='1em'
               mb='1em'
               fontSize="lg"
               fontWeight="bold"
              >Please sign up or login to place your order</Text>
            </Box>}


        <Container className="container" maxWidth="600px" style={{marginBottom: '6em'}}>
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
                    onClick={handleCheckout}

                >
                Checkout
                </Button>
            </Box>

        </Container>
        </>


    )
}
