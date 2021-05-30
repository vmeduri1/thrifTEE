import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, Box, Flex, Link, Image, Text, Grid } from "@chakra-ui/react";
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
    const history = useHistory();
    const handleTops = () => {
        history.push('/categories/1');
    }

    useEffect(() => {
        dispatch(getAllProductsByCategory(id));
    }, [dispatch, id])

    return (
        <ThemeProvider>
            <div className="master-div">
            <Grid
                bg="black"
                // w="100%"
                // px={5}
                // py={4}
                // justifyContent="space-between"
                // alignItems="center"
                templateColumns="repeat(3, 1fr)" gap={.5}
            >
            <Box w="100%" h="20" bg="black" />
            <Box>
                <div className="nav-links">
                    <div className="tops">
                        {/* <button onClick={handleTops}>Tops</button> */}
                        <NavLink className="navs" to="/categories/1">Tops</NavLink>
                    </div>
                    <div className="bottoms">
                        <NavLink className="navs" to="/categories/2">Bottoms</NavLink>
                    </div>
                    <div className="shoes">
                        <NavLink className="navs" to="/categories/3">Shoes</NavLink>
                    </div>
                    <div className="accessories">
                        <NavLink className="navs" to="/categories/4">Accessories</NavLink>
                    </div>
                </div>

            </Box>
            </Grid>
            </div>
        </ThemeProvider>
    )
}
