import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

//
const items = localStorage.getItem("store") !== null ? JSON.parse(localStorage.getItem("store")) : [];

const totalAmount = localStorage.getItem("totalAmount") !== null ? JSON.parse(localStorage.getItem("totalAmount")) : 0;

const totalQuantity =
    localStorage.getItem("totalQuantity") !== null ? JSON.parse(localStorage.getItem("totalQuantity")) : 0;

const setItemFunc = (item, totalAmount, totalQuantity) => {
    localStorage.setItem("store", JSON.stringify(item));
    localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
    localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
};

const initialState = {
    cartItems: items,
    totalQuantity: totalQuantity,
    totalAmount: totalAmount,
};

//

const CartSlice = createSlice({
    initialState,
    name: "cart",
    reducers: {
        setAddItemToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item._id === action.payload._id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += Number(action.payload.cartQuantity);
                toast.success(`${action.payload.title} QTY increased`);
            } else {
                const temp = { ...action.payload };
                state.cartItems.push(temp);
                toast.success(`${action.payload.title} add to cart`);
            }

            localStorage.setItem("store", JSON.stringify(state.cartItems));

            state.totalQuantity = state.cartItems.reduce((totalQ, item) => totalQ + Number(item.cartQuantity), 0);

            state.totalAmount = state.cartItems.reduce(
                (total, item) => total + Number(item.price) * Number(item.cartQuantity),
                0
            );

            setItemFunc(
                state.cartItems.map((item) => item),
                state.totalAmount,
                state.totalQuantity
            );
        },

        setRemoveItemFromCart: (state, action) => {
            const removeItem = state.cartItems.filter((item) => item._id !== action.payload._id);
            state.cartItems = removeItem;

            localStorage.setItem("store", JSON.stringify(state.cartItems));

            toast.success(`${action.payload._id} removed from cart`);

            state.totalQuantity = state.cartItems.reduce((totalQ, item) => totalQ + Number(item.cartQuantity), 0);

            state.totalAmount = state.cartItems.reduce(
                (total, item) => total + Number(item.price) * Number(item.cartQuantity),
                0
            );

            setItemFunc(
                state.cartItems.map((item) => item),
                state.totalAmount,
                state.totalQuantity
            );
        },

        setIncreaseItemQTY: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item._id === action.payload._id);

            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;

                toast.success(`Item ${action.payload.title} Increased`);
            }
            localStorage.setItem("store", JSON.stringify(state.cartItems));

            state.totalQuantity = state.cartItems.reduce((totalQ, item) => totalQ + Number(item.cartQuantity), 0);

            state.totalAmount = state.cartItems.reduce(
                (total, item) => total + Number(item.price) * Number(item.cartQuantity),
                0
            );

            setItemFunc(
                state.cartItems.map((item) => item),
                state.totalAmount,
                state.totalQuantity
            );
        },

        setDecreaseItemQTY: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item._id === action.payload._id);

            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;

                toast.success(`${action.payload.title} QTY Decreased`);
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const removeItem = state.cartItems.filter((item) => item._id !== action.payload._id);

                state.cartItems = removeItem;
                localStorage.setItem("store", JSON.stringify(state.cartItems));

                toast.success(`${action.payload.title} removed from cart`);
            }
            localStorage.setItem("store", JSON.stringify(state.cartItems));

            state.totalQuantity = state.cartItems.reduce((totalQ, item) => totalQ + Number(item.cartQuantity), 0);

            state.totalAmount = state.cartItems.reduce(
                (total, item) => total + Number(item.price) * Number(item.cartQuantity),
                0
            );

            setItemFunc(
                state.cartItems.map((item) => item),
                state.totalAmount,
                state.totalQuantity
            );
        },

        setClearCartItems: (state, action) => {
            state.cartItems = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;
            toast.success(`Cart Cleared`);
            localStorage.setItem("store", JSON.stringify(state.cartItems));
            localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity));
            localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));

            setItemFunc(
                state.cartItems.map((item) => item),
                state.totalAmount,
                state.totalQuantity
            );
        },
    },
});

export const { setAddItemToCart, setRemoveItemFromCart, setIncreaseItemQTY, setDecreaseItemQTY, setClearCartItems } =
    CartSlice.actions;

export const selectCartItems = (state) => state.cart.cartItems;

export const selectTotalAmount = (state) => state.cart.totalAmount;
export const selectTotalQty = (state) => state.cart.totalQuantity;

export default CartSlice.reducer;
