import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './couterSlice'
import favSlice from './favSlice'

export default configureStore({
  reducer: {
    fav: favSlice
  }
})
