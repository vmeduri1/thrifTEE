import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react"
import { Container } from "@chakra-ui/react"
import { Flex, Spacer } from "@chakra-ui/react"
import { SimpleGrid } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import * as sessionActions from '../store/session'
import * as categoryActions from '../store/category'
import { getAllProductsByCategory } from '../store/category'
import Cart from './Cart'
import Item from './Item'


export default function Category() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);
    const allCatProducts = useSelector((state) => Object.values(state.category.categories));
    const cart = useSelector((state) => state.cart)
    const { id } = useParams()
    // const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')


    useEffect(() => {
        dispatch(getAllProductsByCategory(id));
    }, [dispatch])

    // useEffect(() => {
    //     localStorage.setItem('cart', JSON.stringify(cart))
    // }, [cart])


    return (
        <>
                <Flex direction='row' height='150px'>

                {allCatProducts.map((product, idx) => (

                    <div key={product.id} height="200px" width="100px">
                        <Item price={product.regular_price} name={product.name} image={product.image_url} product={product} />
                        </div>


                 ))}

               </Flex>



        </>
    )

}
