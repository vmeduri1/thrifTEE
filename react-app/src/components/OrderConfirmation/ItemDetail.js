import React from 'react';
import './orderConfirmation.css'
import { Link } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { Grid, GridItem } from "@chakra-ui/react"
import { useDispatch } from 'react-redux'
import { DeleteIcon } from '@chakra-ui/icons'
import {removeProduct} from '../../store/cart'



export default function ItemDetail({ product }) {
    const dispatch = useDispatch()

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
                <GridItem
                    fontWeight='500'
                >
                    ${product.regular_price}
                </GridItem>
                <GridItem>
                    <DeleteIcon
                        cursor='pointer'
                        onClick={() => dispatch(removeProduct(product))}
                    >
                        Remove
                    </DeleteIcon>
                </GridItem>
            </Grid>
        </>

    )
}
