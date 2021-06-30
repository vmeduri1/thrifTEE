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
            <Grid className="product-details-grid">
                <Grid templateColumns="repeat(6, 1fr)" gap={4}>
                    <GridItem className="img-contain" colSpan={1}>
                        <GridItem className="product-details-grid-name" colSpan={1}>{product.name}</GridItem>
                        <img className="item-img" src={product.image_url}></img>
                    </GridItem>
                    <GridItem>${product.regular_price}</GridItem>
                    <GridItem><DeleteIcon>Remove</DeleteIcon></GridItem>
                </Grid>
            </Grid>

            {/* <span>{product.name}</span>
            <div><img src={product.image_url}alt=""/></div>
            <span>${product.regular_price}</span>
            <div><DeleteIcon />Remove</div> */}
        </>

    )
}
