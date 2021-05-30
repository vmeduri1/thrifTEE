import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as searchActions from '../../store/search'

import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  isRequired,
  Stack,
} from "@chakra-ui/react";



const Search = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = async (e) => {
    e.preventDefault();

    await dispatch(searchActions.searchFunc(searchTerm))
    history.push('/search')
  }


  return (
    <div>
      <FormControl
        w="475%" h="20" bg="FFFFFF" color='#000000' textAlign="center" paddingTop={5}
      >
        <InputGroup>
          <Input
            placeholder="I'm looking for..."
            bg="white"
            type='text'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button onClick={(e) => handleSearch(e)} type='Submit'><i className="fas fa-search"></i></Button>
        </InputGroup>
      </FormControl>
    </div>
  )
}

export default Search;
