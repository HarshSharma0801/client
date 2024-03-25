'use client'
import {createSlice} from '@reduxjs/toolkit'



const initalState = {
    items:[],
    totalAmount:0,
    totalQuantity:0
};

const Cart = createSlice({
    name:'MainCart',
    initialState:initalState,
    reducers:{
        AddToCart(state,action){
         const newItem = action.payload;
         const existingItem = state.items.find(data=> data.id === newItem.id);
         state.totalQuantity++;
         state.totalAmount=Number(state.totalAmount) + Number(newItem.price) ; 
         if(existingItem){
            existingItem.quantity++
         }
         else{
            const newCartItem = { id:newItem.id,
                name:newItem.name,
                price:newItem.price,
                image:newItem.Images[0],
                quantity:1,};
                state.items.push(newCartItem)
         }
        },
        RemoveFromCart(state,action){
            const newItemId = action.payload;
            const existingItem = state.items.find(data=> data.id === newItemId);
            if(existingItem.quantity===1){
                state.totalQuantity--;
                state.totalAmount-=existingItem.price ; 
                state.items = state.items.filter(data=> data.id!==existingItem.id);
            }
            else{
                state.totalAmount= Number(state.totalAmount) - Number(existingItem.price) ; 
                existingItem.quantity--;
                state.totalQuantity--;
            }
        }
    }
})

export const CartActions = Cart.actions;

export default Cart