import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const exist = state.find(pd => pd.id === newItem.id);
            if (exist) {
                alert('Already Exist item!')
            } else {
                const addItem = { ...action.payload, quantity: 1, totalPrice: newItem.price }
                state.push(addItem)
            }
        },
        increseQuantity: (state, action) => {
            const item = state.find(pd => pd.id === action.payload)
            item.quantity += 1;
            item.totalPrice = item.price * item.quantity;
        },
        decreseQuantity: (state, action) => {
            const item = state.find(pd => pd.id === action.payload)
            item.quantity -= 1;
            item.totalPrice = item.price * item.quantity;
        },
        deleteItem: (state, action) => {
            return state.filter(item => item.id != action.payload)
        }

    }
})

export const { addToCart, increseQuantity, decreseQuantity, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;