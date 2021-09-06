import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './couterSlice'
import favSlice from './favSlice'
import productsReducer from './productsSlice';

export default configureStore({
  reducer: {
    fav: favSlice,
    products: productsReducer
  }
})
