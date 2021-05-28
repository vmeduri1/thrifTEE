import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import {
  Link,
} from "@chakra-ui/react"

const LogoutButton = () => {
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    dispatch(logout());
  };

  return <Link onClick={onLogout}>Logout</Link>;
  // return <Button onClick={onLogout}>Logout</Button>;
};

export default LogoutButton;
