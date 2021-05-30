import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'


const SearchResultsFunc = () => {
  const product_results = useSelector(state => state.search.products)

  return (
    <>
      <div className='products-div'>

      </div>

    </>
  )
}


export default SearchResultsFunc;
