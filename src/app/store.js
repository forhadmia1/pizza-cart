import { configureStore } from '@reduxjs/toolkit'
import CartReducer from '../features/cart/CartSlice';
import ProductsReducer from '../features/products/ProductsSlice';


const store = configureStore({
    reducer: {
        products: ProductsReducer,
        cart: CartReducer
    }
})

export default store;