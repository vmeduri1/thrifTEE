import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Item from '../Item'

import {
  Flex,
  Text,
} from '@chakra-ui/react';


const SearchResultsFunc = (search) => {
  const product_Search = useSelector(state => state.search?.searchResults)
  // console.log(product_Search, 'productSearch details----')

  const productResults = Object.values(product_Search).map(product => {
    return <Item price={product.regular_price} name={product.name} image={product.image_url} product={product} key={product.id} />

  })
  // console.log(product_Search, '---------SEARCH')
  console.log(productResults.length, 'productResults Array---- ')

  return (
    <>
      <Text
        fontSize='23px'
        fontWeight='600'
        mt='50px'
        ml='25px'
      >
        Your search returned {productResults.length} results:
      </Text>
      <Flex className='search-container'>
        {productResults}
      </Flex>
    </>
  )
}


export default SearchResultsFunc;
