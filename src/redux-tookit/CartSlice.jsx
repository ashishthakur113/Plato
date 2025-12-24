import { createSlice } from "@reduxjs/toolkit";
import { food_list } from "../assets/assets";


export const getCartFromStorage = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return {};

    const carts = JSON.parse(localStorage.getItem("carts")) || {};
    return carts[user.email] || {};
}

const initialState = {
    cartItems: getCartFromStorage()
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        addToCart: (state, action) => {
            const itemId = action.payload;
            state.cartItems[itemId] = (state.cartItems[itemId] || 0) + 1;
        },

        removerFromCart: (state, action) => {
            delete state.cartItems[action.payload]
        },
        increment: (state, action) => {
            const itemId = action.payload;
            const itemExits = food_list.some(item => item._id === itemId);
            if (!itemExits) return;
            state.cartItems[itemId] = (state.cartItems[itemId] || 0) + 1;
        },
        decrement: (state, action) => {
            const itemId = action.payload;
            if (!state.cartItems[itemId]) return;

            if (state.cartItems[itemId] === 1) {
                delete state.cartItems[itemId];
            } else {
                state.cartItems[itemId] -= 1;
            }
        },

        saveCart: (state, action) => {
            const user = JSON.parse(localStorage.getItem("user"));
            if (!user) return;

            const carts = JSON.parse(localStorage.getItem("carts")) || {};
            carts[user.email] = state.cartItems;
            localStorage.setItem("carts", JSON.stringify(carts));
        },
        clearCart: (state) => {
            state.cartItems = {};
        },
        loadCartForUser: (state) => {
            const user = JSON.parse(localStorage.getItem("user"));
            if (!user) {
                state.cartItems = {};
                return;
            }

            const carts = JSON.parse(localStorage.getItem("carts")) || {};
            state.cartItems = carts[user.email] || {};
        },

    }
})

export const getTotalCartAmount = (state) => {
    let total = 0;

    for (const item in state.cart.cartItems) {
        const itemInfo = food_list.find((prod) => prod._id === item);

        if (itemInfo) {
            total += itemInfo.price * state.cart.cartItems[item];
        }
    }
    return total;
};

export const getTotalCartQuantity = (state) => {
    let totalQty = 0;

    for (const itemId in state.cart.cartItems) {
        totalQty += state.cart.cartItems[itemId];
    }

    return totalQty;
};





export const { addToCart, removerFromCart, increment, decrement, saveCart, clearCart, loadCartForUser } = cartSlice.actions;
export default cartSlice.reducer