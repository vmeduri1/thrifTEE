import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory,useParams } from 'react-router-dom'
import * as productActions from '../../store/products'
import {getSingleProduct} from '../../store/products'
import {setProduct} from '../../store/products'
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
    onClose
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
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"

        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
        <Circle
          size="10px"
          position="absolute"
          top={2}
          right={2}
          // bg="red.200"
        />

        <Image
          src={product.image_url}
          alt={`Picture of ${product.name}`}
          roundedTop="lg"
          height="500px"
          vw="2%"
          backgroundImage='contain'
        />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
              New
                </Badge>
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
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
                     const dispatched = await dispatch(setProduct(product))
                    //  isOpen()
                  }}


                />
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
                ${product.regular_price}
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>

    )
}
