import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, Box, Flex, Link, Image, Text, Grid, Center } from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';
import './CatNavBar.css'
import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProductsByCategory } from '../store/category';

export default function CatNavBar() {
    const dispatch = useDispatch();
    const { id } = useParams()
    const allCatProducts = useSelector((state) => Object.values(state.category.categories));
    const [products, setProducts]=useState(null)
    // const history = useHistory();
    // const handleTops = () => {
    //     history.push('/categories/1');
    // }

    useEffect(() => {
        dispatch(getAllProductsByCategory(id));
    }, [dispatch, id])


    return (
        <ThemeProvider>
            <div className="master-div">
            <Grid
                bg="#f6f6f6"
                // w="100%"
                // px={5}
                // py={4}
                // justifyContent="space-between"
                // alignItems="center"
                templateColumns="repeat(3, 1fr)" gap={.5}
            >
            <Box w="100%" h="20" bg="#f6f6f6" />
            <Flex >
                <Box h="50px" mt="15px">
                    <div className="nav-links">
                        <div className="tops">
                            {/* <button onClick={handleTops}>Tops</button> */}
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
