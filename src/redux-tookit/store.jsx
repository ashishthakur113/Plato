import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './CartSlice'
import AuthReducer from './AuthSlice'

export const store = configureStore({
    reducer:{
        cart : CartReducer,
        auth : AuthReducer
    }
})