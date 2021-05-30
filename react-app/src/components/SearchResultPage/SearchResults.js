import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Item from '../Item'


const SearchResultsFunc = () => {
  const product_Search = useSelector(state => state.search.products)


  const productResults = product_Search?.map(product => {
    return <Item product={product} key={product.id} />
  })


  return (
    <>
      <div className='products-div'>
        {productResults}
      </div>
    </>
  )
}


export default SearchResultsFunc;
