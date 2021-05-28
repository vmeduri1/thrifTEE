import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import Category from './Category/Category';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to ="/categories/1" exact={true} activeClassName="active">
            Tops
            <Category />
          </NavLink>
        </li>
        <li>
          <NavLink to ="/categories/2" exact={true} activeClassName="active">
            Bottoms
            <Category />
          </NavLink>
        </li>
        <li>
          <NavLink to ="/categories/3" exact={true} activeClassName="active">
            Shoes
            <Category />
          </NavLink>
        </li>
        <li>
          <NavLink to ="/categories/4" exact={true} activeClassName="active">
            Accessories
            <Category />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
