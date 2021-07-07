import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {

      const dispatched = await dispatch(sessionActions.signUp({ fname, lname, email, password }))
      if (dispatched.errors) setErrors(dispatched.errors)

    } else setErrors(['Confirm Password field must be the same as the Password field']);
  }




  return (
    <form onSubmit={handleSubmit}>
      <div>
        <ul style={{ marginTop: '.25em', marginBottom: '1.25em' }}>
          {errors && errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>

      </div>
      <Stack spacing={3}>
        <FormControl isRequired>
          <FormLabel>First name</FormLabel>
          <InputGroup>
            <Input

              placeholder="First name"
              type='text'
              value={fname}
              onChange={(e) => setfname(e.target.value)}
            />
          </InputGroup>
          <FormLabel>Last name</FormLabel>
          <InputGroup>
            <Input

              placeholder="Last name"
              type='text'
              value={lname}
              onChange={(e) => setlname(e.target.value)}
            />
          </InputGroup>
          <FormLabel>Email</FormLabel>
          <InputGroup>
            <Input

              placeholder="Email"
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input

              placeholder="Password"
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>
          <FormLabel>Confirm Password</FormLabel>
          <InputGroup>
            <Input

              placeholder="Confirm Password"
              type='password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </InputGroup>
          <br />
          <Button
            type='Submit'
            border='1px solid rgb(211, 211, 211)'
          >
            Sign Up
          </Button>
        </FormControl>
      </Stack>
    </form>
  )

}
