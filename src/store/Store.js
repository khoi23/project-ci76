import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice.js";
import WishListSlice from "./WishListSlice.js";

const Store = configureStore({
    reducer: {
        cart: CartSlice,
        wishlist: WishListSlice,
    },
});

export default Store;
