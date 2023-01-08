
import { configureStore } from "@reduxjs/toolkit";
import cart from "./cart";
import user from "./user";


const store = configureStore({
    reducer:{
        user:user,
        cart:cart
    }
})

export default store