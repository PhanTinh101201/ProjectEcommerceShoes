import { configureStore } from "@reduxjs/toolkit";
import authSlide from'./Redux/authSlice';

const store = configureStore({
    reducer:{
    use: authSlide
    },
})

export default store;