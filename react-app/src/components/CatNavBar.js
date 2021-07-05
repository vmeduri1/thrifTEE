import React from 'react';
import { ThemeProvider, Box, Flex, Link, Grid} from "@chakra-ui/react";
import './CatNavBar.css'
import {  useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllProductsByCategory } from '../store/category';

export default function CatNavBar() {
    const dispatch = useDispatch();
    const { id } = useParams()

    useEffect(() => {
        dispatch(getAllProductsByCategory(id));
    }, [dispatch, id])


    return (
        <ThemeProvider>
            <div className="master-div">
            <Grid
                bg="#f6f6f6"
                templateColumns="repeat(3, 1fr)" gap={.5}
            >
            <Box w="100%" h="20" bg="#f6f6f6" />
            <Flex >
                <Box h="50px" mt="15px">
                    <div className="nav-links">
                        <div className="tops">

                            <Link href='/categories/1'  fontSize="22px" fontWeight="500" className="navs" style={{textDecoration: 'none'}} color="black">Tops</Link>
                        </div>
                        <div className="bottoms">
                            <Link href="/categories/2" fontSize="22px" fontWeight="500" className="navs" style={{textDecoration: 'none'}} color="black" >Bottoms</Link>
                        </div>
                        <div className="shoes">
                            <Link fontSize="22px" fontWeight="500" className="navs" style={{textDecoration: 'none'}} href="/categories/3" color="black">Shoes</Link>
                        </div>
                        <div className="accessories">
                            <Link fontSize="22px" fontWeight="500" className="navs" style={{textDecoration: 'none'}} href="/categories/4" color="black">Accessories</Link>
                        </div>
                    </div>

                </Box>
            </ Flex>
            </Grid>
            </div>
        </ThemeProvider>
    )
}
