import React from 'react';
import './NavBar.css';
import {Outlet, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className='Navbar'>
        <NavLink to={"/sandalnam"}>Giày Nam</NavLink>
        <NavLink to={"/sandalnu"}>Giày Nữ</NavLink>
        <NavLink to={"/dep1"}>Dép<p></p></NavLink>
    </div>
  )
}

export default NavBar