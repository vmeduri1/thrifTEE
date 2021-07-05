import React from 'react';
import { useSelector } from 'react-redux'
import Item from '../Item'

import {
  Flex,
  Text,
} from '@chakra-ui/react';


const SearchResultsFunc = (search) => {
  const product_Search = useSelector(state => state.search?.searchResults)
  const productResults = Object.values(product_Search).map(product => {
    return <Item price={product.regular_price} name={product.name} image={product.image_url} product={product} key={product.id} />

  })


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
