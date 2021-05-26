import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  // isRequired,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export function SignUpForm() {

  return (
    <form action='submit'>
      <Stack spacing={3}>
        <FormControl isRequired>
          <FormLabel>First name</FormLabel>
          <InputGroup>
            <Input
              // ref={initialRef}
              placeholder="First name"
              type='name'
            />
          </InputGroup>
        </FormControl>
        <FormLabel>Last name</FormLabel>
        <InputGroup>
          <Input
            // ref={initialRef}
            placeholder="Last name"
            type='name'
          />
        </InputGroup>
        <FormLabel>Email</FormLabel>
        <InputGroup>
          <Input
            // ref={initialRef}
            placeholder="Email"
            type='email'
          />
        </InputGroup>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            // ref={initialRef}
            placeholder="Password"
            type='password'
          />
        </InputGroup>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            // ref={initialRef}
            placeholder="Confirm Password"
            type='password'
          />
        </InputGroup>

      </Stack>
    </form>
  )

}
