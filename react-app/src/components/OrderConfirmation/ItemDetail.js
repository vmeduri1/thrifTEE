import React from 'react';
// import {
//     Box,
//     Grid,
//     Text,
//     Link,
//     Container,
//     GridItem,
//     Heading,
//     DeleteIcon,
// } from "@chakra-ui/react"
import { Link } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { Grid, GridItem } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import { DeleteIcon } from '@chakra-ui/icons'
import './orderConfirmation.css'


export default function ItemDetail({ product }) {
    return (
        <>
            <Grid
                templateColumns="repeat(4, 1fr)"
                gap={4}
                borderBottom='1px solid rgb(0, 0, 0, 0.063)'
                mt='16px'
                w='800px'
            >
                <GridItem
                    mb='16px'
                >
                    <Link href={`/products/${product.id}`}>
                        <Image
                            src={product.image_url}
                            h='10em'
                            w='10em'
                        />
                    </Link>
                </GridItem>
                <GridItem
                    alignContent='center'
                >
                    {product.name}
                </GridItem>
                <GridItem>${product.regular_price}</GridItem>
                <GridItem><DeleteIcon>Remove</DeleteIcon></GridItem>
            </Grid>
        </>

    )
}
