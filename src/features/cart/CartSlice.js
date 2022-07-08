import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const exist = state.find(pd => pd.id === newItem.id);
            if (exist) {
                const rest = state.filter(pd => pd.id !== exist.id);
                exist.quantity += 1;
                state = [...rest, exist]
            } else {
                const addItem = { ...action.payload, quantity: 1 }
                state.push(addItem)
            }
        }
    }
})

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;