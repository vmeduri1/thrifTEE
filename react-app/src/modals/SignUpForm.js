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
import * as sessionActions from "../store/session"


export function SignUpForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) {
    // console.log('Usersession if block !!!!!!----------')
    return <Redirect to="/" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signUp({ fname, lname, email, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };



  return (
    <form onSubmit={handleSubmit}>
      <div>
        {errors.map((error, idx) => <span key={idx}>{error}</span>)}
      </div>
      <Stack spacing={3}>
        <FormControl isRequired>
          <FormLabel>First name</FormLabel>
          <InputGroup>
            <Input
              // ref={initialRef}
              placeholder="First name"
              type='text'
              value={fname}
              onChange={(e) => setfname(e.target.value)}
            />
          </InputGroup>
          <FormLabel>Last name</FormLabel>
          <InputGroup>
            <Input
              // ref={initialRef}
              placeholder="Last name"
              type='text'
              value={lname}
              onChange={(e) => setlname(e.target.value)}
            />
          </InputGroup>
          <FormLabel>Email</FormLabel>
          <InputGroup>
            <Input
              // ref={initialRef}
              placeholder="Email"
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              // ref={initialRef}
              placeholder="Password"
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>
          <FormLabel>Confirm Password</FormLabel>
          <InputGroup>
            <Input
              // ref={initialRef}
              placeholder="Confirm Password"
              type='password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </InputGroup>
          <Button type='Submit'>Sign Up</Button>
        </FormControl>
      </Stack>
    </form>
  )

}
