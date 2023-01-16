import { createSlice } from "@reduxjs/toolkit"

const myCartSlice = createSlice({
    name: 'myCart',
    initialState: {
        items: [],
        totalQty: 0,
    },
    reducers: {
        addItemToCart(state, actions) {
            const newItem = actions.payload
            const existingItem = state.items.find(item => item.id === newItem.id)
            state.totalQty++

            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                })
            }
            else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },

        removeItemFromCart(state, actions) {
            const id = actions.payload
            const existingItem = state.items.find(item => item.id === id)
            state.totalQty--

            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id)
            }
            else {
                existingItem.quantity--
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }
        }
    }
})

export const myCartActions = myCartSlice.actions

export default myCartSlice;