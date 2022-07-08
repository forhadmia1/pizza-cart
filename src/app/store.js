import { configureStore } from '@reduxjs/toolkit'
import ProductsReducer from '../features/products/ProductsSlice';


const store = configureStore({
    reducer: {
        products: ProductsReducer
    }
})

export default store;