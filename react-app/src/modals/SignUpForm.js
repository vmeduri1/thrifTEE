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
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export function SignUpForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");                     // added location
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  return (
    <form action='submit'>
      <Stack spacing={3}>
        <FormControl isRequired>
          <FormLabel>First name</FormLabel>
          <InputGroup>
            <Input
              // ref={initialRef}
              placeholder="First name"
              type='text'
            />
          </InputGroup>
          <FormLabel>Last name</FormLabel>
          <InputGroup>
            <Input
              // ref={initialRef}
              placeholder="Last name"
              type='text'
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
        </FormControl>
      </Stack>
    </form>
  )

}
