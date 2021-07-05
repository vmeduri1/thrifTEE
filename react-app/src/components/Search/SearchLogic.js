import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as searchActions from '../../store/search'

import {
  Button,
  FormControl,
  Input,
  InputGroup,
} from "@chakra-ui/react";



const Search = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearchTerm('')

    await dispatch(searchActions.searchFunc(searchTerm))
    history.push(`/search/${searchTerm}`)
  }


  return (
    <>
      <form onSubmit={handleSearch}>
        <FormControl
          w="475%" h="20" bg="#FFFFFF" color='#000000' textAlign="center" paddingTop={5}
        >
          <InputGroup>
            <Input
              placeholder="I'm looking for..."
              bg="white"
              type='text'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button onClick={handleSearch} type='Submit' colorScheme="white" variant="ghost" _hover={{ color: "white", fontWeight: "bold", bg: "gray.400" }}><i className="fas fa-search"></i></Button>
          </InputGroup>
        </FormControl>
      </form>
    </>
  )
}

export default Search;
