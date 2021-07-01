import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Item from '../Item'
import { searchFunc } from '../../store/search'
import {
  Flex,
  Text,
} from '@chakra-ui/react';


const SearchResultsFunc = () => {
  const product_Search = useSelector(state => state.search?.searchResults)
  // console.log(state.search, '-----search term')


  const productResults = Object.values(product_Search).map(product => {
    return <Item price={product.regular_price} name={product.name} image={product.image_url} product={product.product} key={product.id} />
  })
  // console.log(product_Search, '---------SEARCH')

  return (
    <>
      <Text
        fontSize='20px'
        fontWeight='600'
        mt='50px'
      >
        Your search found the following items:
      </Text>
      <Flex className='search-container'>
        {productResults}
      </Flex>
    </>
  )
}


export default SearchResultsFunc;
