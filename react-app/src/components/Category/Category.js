import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react"
import { Flex, Spacer, Container, Text } from "@chakra-ui/react"
import { Box, Center, SimpleGrid, Wrap, WrapItem } from "@chakra-ui/react"
import * as sessionActions from '../../store/session'
import * as categoryActions from '../../store/category'
import { getAllProductsByCategory } from '../../store/category'
import CartDrawer from '../Drawer/CartDrawer'
import Item from '../Item'
import { useDisclosure } from "@chakra-ui/react"
import {CategoryHero} from './CategoryHero'


export default function Category() {
    const { isOpen, onOpen } = useDisclosure()
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);
    const allCatProducts = useSelector((state) => Object.values(state.category.categories));
    // const categoryName = useSelector((state) => state.category)
    const product = useSelector(state => state.products.product)
    const cart = useSelector((state) => state.cart)
    const { id } = useParams()
    // const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')


    useEffect(() => {
        dispatch(getAllProductsByCategory(id));
    }, [dispatch])





    return (
        <>
        <CategoryHero />
            <CartDrawer cart={cart} />

            <Box>
            {/* <Text fontSize="6xl">{`ThrifTEE ${categoryName}`}</Text> */}
            {/* {console.log(categoryName + "category")} */}
            </Box>

                <Wrap spacing="20px">


                    {allCatProducts.map((product, idx) => (

                        <WrapItem key={product.id}>
                            <Center>
                            <Item price={product.regular_price} name={product.name} image={product.image_url} product={product} id={product.id}/>
                            </Center>
                        </WrapItem>


                    ))}
                </Wrap>






        </>
    )

}
