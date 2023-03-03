import React from 'react'
import MenuTop from '../../pages/HomePage/FixedMenu/MenuTop';
import Footer from '../../pages/HomePage/Footer/Footer';
import {Outlet, NavLink } from "react-router-dom";
export default function LayoutUser() {
  return (
    <div>
       <MenuTop/>
       <Outlet/>
       <Footer/>
    </div>
  )
}
