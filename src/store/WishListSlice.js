import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    wishlistItems: localStorage.getItem("wishlist") !== null ? JSON.parse(localStorage.getItem("wishlist")) : [],
};

const WishListSlice = createSlice({
    initialState,
    name: "wishlist",
    reducers: {
        setAddItemToWishList: (state, action) => {
            const itemIndex = state.wishlistItems.findIndex((item) => item._id === action.payload._id);
            if (itemIndex >= 0) {
                toast.error(`${action.payload.title} added to wish list`);
            } else {
                const temp = { ...action.payload };
                state.wishlistItems.push(temp);
                toast.success(`${action.payload.title} add to wish list`);
            }

            localStorage.setItem("wishlist", JSON.stringify(state.wishlistItems));
        },

        setRemoveItemFromWishList: (state, action) => {
            const removeItem = state.wishlistItems.filter((item) => item._id !== action.payload._id);
            state.wishlistItems = removeItem;

            localStorage.setItem("wishlist", JSON.stringify(state.wishlistItems));

            toast.success(`${action.payload._id} removed from wishlist`);
        },

        setClearWishList: (state, action) => {
            state.wishlistItems = [];
            toast.success(`Cart Cleared`);
            localStorage.setItem("wishlist", JSON.stringify(state.wishlistItems));
        },
    },
});

export const { setAddItemToWishList, setRemoveItemFromWishList, setClearWishList } = WishListSlice.actions;

export const selectWishListItems = (state) => state.wishlist.wishlistItems;

export default WishListSlice.reducer;
