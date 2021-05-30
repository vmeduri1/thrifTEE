import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';



function Search() {
  const dispatch = useDispatch()
  const history = useHistory()
  const [search, setSearch] = useState('')

  const handleSearch = async (e) => {
    e.preventDefault();

    const dispatched = await dispatch()
  }


  return (
    <div>

    </div>
  )
}
