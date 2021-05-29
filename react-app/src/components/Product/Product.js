// comment
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import * as productActions from '../../store/products';
import {getSingleProduct} from '../../store/products';
import { addProduct } from '../../store/cart';
import CartDrawer from '../Drawer/CartDrawer'
import Category from '../Category/Category'

import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    useDisclosure,
    onOpen,
    onClose,
    Container,
    Button,
    Text
  } from '@chakra-ui/react';
  import { FiShoppingCart } from 'react-icons/fi';



export default function SingleProduct() {
    const dispatch = useDispatch();
    const product = useSelector(state => state.products.product)
    const cart = useSelector((state) => state.cart)
    const { id } = useParams()


    useEffect(() => {
        dispatch(getSingleProduct(id));
    }, [dispatch])



  return (

      <>
  <Container w="1000px" centerContent>
    <CartDrawer cart={cart} />
     <Box
       bg={useColorModeValue('white', 'gray.800')}


      borderWidth="1px"
       rounded="lg"
          position="relative"
          w='100%'>


         <Image
        src={product.image_url}
        alt={`Picture of ${product.name}`}
          roundedTop="lg"
         height="500px"
           w="100%"
        />

     <Box p="6">
           <Box d="flex" alignItems="baseline">
            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
               New
                </Badge>
       </Box>
           <Box mt="1" justifyContent="space-between" alignContent="center">
             <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              {product.name}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <chakra.a href={'#'} display={'flex'}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'}
                  onClick={
                    async () => {
                     const dispatched = await dispatch(addProduct(product))
                  }}


                />
              </chakra.a>
            </Tooltip>
          </Box>

          <Box justifyContent="space-between" alignContent="center">
            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
                ${product.regular_price}
              </Box>

              <Box>
              <Text fontSize="xl">
              {product.description}
              </Text>

              </Box>

            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
    </>

    );
  }
