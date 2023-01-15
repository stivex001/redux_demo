import { createSlice } from "@reduxjs/toolkit"

const initialCartToggleState = {showCart: false}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartToggleState,
    reducers: {
        toggle(state) {
            state.showCart = !state.showCart
        }
    }
})

export const cartToggleAction = cartSlice.actions
export default cartSlice