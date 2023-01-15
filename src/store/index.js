import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './cartToggle';



const store = configureStore({
    reducer: {cart: cartSlice.reducer}
})



export default store;