import React, { Component } from "react";
import './Carousel.css'
import ReactDOM from "react-dom";
import {Outlet, NavLink } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const ReactCarousel = () => {
  return (
    <div className="main">
      <Carousel>
        <div>
          <img src="https://theme.hstatic.net/200000104423/1000577263/14/ms_banner_img4.jpg?v=1191" />
        </div>
        <div>
          <img src="https://theme.hstatic.net/200000104423/1000577263/14/ms_banner_img7.jpg?v=1191" />
        </div>
        <div>
          <img src="https://theme.hstatic.net/200000104423/1000577263/14/ms_banner_img1.jpg?v=1191" />
        </div>
        <div>
          <img src="https://theme.hstatic.net/200000104423/1000577263/14/ms_banner_img2.jpg?v=1191" />
        </div>  
      </Carousel>
    </div>
  );
};

export default ReactCarousel;
