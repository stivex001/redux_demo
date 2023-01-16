import {configureStore} from '@reduxjs/toolkit';
import myCartSlice from './cart-slice';
import cartSlice from './cartToggle';



const store = configureStore({
    reducer: {cart: cartSlice.reducer, myCart: myCartSlice.reducer}
})



export default store;