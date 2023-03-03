import React from 'react';
import {Outlet, NavLink } from "react-router-dom";
import MenuTop from './FixedMenu/MenuTop';
import Carousel from './Carousel/Carousel';
import Ariival from './ArrivalHomeFages/Ariival';
import NanuMinima from './NanuMinima/NanuMinima';
import NavBar from './Classify/Navbar/NavBar';

const HomePages = () => {
  return (
    <div>
     <MenuTop/>
     <Carousel/>
     <Ariival/>
     <NanuMinima/>
     <NavBar/>
     <Outlet/>
    </div>
  )
}

export default HomePages