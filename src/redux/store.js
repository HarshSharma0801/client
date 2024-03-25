'use client'

import { configureStore } from "@reduxjs/toolkit";
import Cart from "./reducers/CartSlice";

const store = configureStore({
    reducer:{Cart:Cart.reducer}
})

export default store