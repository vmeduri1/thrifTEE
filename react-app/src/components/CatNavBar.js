import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, Box, Flex, Link, Image, Text } from "@chakra-ui/react";

const NavLink = ({ children, ...props }) => (
    <Link px={2} color="white" {...props}>
        {children}
    </Link>
)

export default function CatNavBar() {
    return (
        <ThemeProvider>
            <Flex
                bg="tomato"
                w="100%"
                px={5}
                py={4}
                justifyContent="space-between"
                alignItems="center"
            >
            <Box>
                <NavLink>Tops</NavLink>
                <NavLink>Bottoms</NavLink>
                <NavLink>Shoes</NavLink>
                <NavLink>Accessories</NavLink>
            </Box>
            </Flex>
        </ThemeProvider>
    )
}
