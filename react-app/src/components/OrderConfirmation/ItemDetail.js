import React from 'react';
import { Container } from "@chakra-ui/react"
import { Grid, GridItem } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import { DeleteIcon } from '@chakra-ui/icons'
import './orderConfirmation.css'


export default function ItemDetail({ product }) {
    return (
        <>
            <Grid>
                <Grid>
                    <Text>{product.name}</Text>
                    <Text>{product.regular_price}</Text>
                </Grid>

                <Grid>
                    <Box className="img-contain" colSpan={3}>
                        <img src={product.image_url}></img>
                    </Box>
                </Grid>

                <Grid>
                    <DeleteIcon>Remove</DeleteIcon>
                </Grid>
            </Grid>
        </>

    )
}
