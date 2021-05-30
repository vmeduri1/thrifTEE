import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Item from '../Item'
import { searchFunc } from '../../store/search'


const SearchResultsFunc = () => {
  const product_Search = useSelector(state => state.search?.searchResults)


  const productResults = Object.values(product_Search).map(product => {
    return <Item price={product.price} name={product.name} image={product.image_url} product={product.product} key={product.id} />
  })
  console.log(product_Search, '---------SEARCH')

  return (
    <>
      <div className='products-div'>
        {productResults}
        {/* Hello this is a test of search page */}
      </div>
    </>
  )
}


export default SearchResultsFunc;
