import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePages from "../pages/HomePage/HomePages";
import SandalNam from "../pages/HomePage/Classify/SandalNam/SandalNam";
import SandalNu from "../pages/HomePage/Classify/SandalNu/SandalNu";
import Dep from "../pages/HomePage/Classify/Dep/Dep";
import Registeration from "../Login/Registeration";
import Newarrial from "./Layout/Newarrial/Newarrial";
import SandalNamNavbar from "./Layout/SandalNam/SandalNamNavbar";
import SandalNuNavbar from "./Layout/SandalNu/SandalNuNavbar";
import Depnavbar from "./Layout/DepNavBar/Depnavbar";
import DetailsProduct from "../pages/DetailProduct/DetailsProduct";
import LayoutUser from "./Layout/LayoutUser";
import Cart from "../pages/Account/Cart/Cart";
import Payment from "../pages/Account/Payment/Payment";
import Myorder from "../pages/Account/Myorder/Myorder";
function AppOneApp() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePages />} />
          <Route path="/" element={<HomePages />}>
            <Route path="/sandalnam" element={<SandalNam />}></Route>
            <Route path="/sandalnu" element={<SandalNu />}></Route>
            <Route path="/dep1" element={<Dep />}></Route>
          </Route>
          <Route path="/login" element={<Registeration />}></Route>
          <Route path="/arrival" element={<LayoutUser />}>
            <Route path="/arrival" element={<Newarrial />}></Route>
          </Route>
          <Route path="/sandalnamnavbar" element={<LayoutUser />}>
            <Route path="/sandalnamnavbar" element={<SandalNamNavbar />} />
          </Route>
          <Route path="/sandalnunavbar" element={<LayoutUser />}>
            <Route path="/sandalnunavbar" element={<SandalNuNavbar />}></Route>
          </Route>
          <Route path="/dep" element={<LayoutUser />}>
            <Route path="/dep" element={<Depnavbar />}></Route>
          </Route>
          <Route path="/product-detail/:id" element={<LayoutUser />}>
            <Route
              path="/product-detail/:id"
              element={<DetailsProduct />}
            ></Route>
          </Route>
          <Route path="/login" element={<LayoutUser />}>
            <Route path="/login" element={<Registeration />}></Route>
          </Route>
          <Route path="/cart" element={<LayoutUser />}>
            <Route path="/cart" element={<Cart />}></Route>
          </Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/myorder" element={<Myorder />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppOneApp;
