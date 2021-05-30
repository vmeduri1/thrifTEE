import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Item from '../Item'
import { searchFunc } from '../../store/search'
import {
  Flex,
} from '@chakra-ui/react';


const SearchResultsFunc = () => {
  const product_Search = useSelector(state => state.search?.searchResults)


  const productResults = Object.values(product_Search).map(product => {
    return <Item price={product.regular_price} name={product.name} image={product.image_url} product={product.product} key={product.id} />
  })
  // console.log(product_Search, '---------SEARCH')

  return (
    <Flex>
      {productResults}
    </Flex>
  )
}


export default SearchResultsFunc;
