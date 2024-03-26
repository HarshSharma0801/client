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
         const existingItem = state.items.find(data=> data._id === newItem._id);
         state.totalQuantity++;
         state.totalAmount=Number(state.totalAmount) + Number(newItem.price) ; 
         if(!existingItem){
            state.items.push({
               _id:newItem._id,
               name:newItem.ItemName,
               price:newItem.price,
               image:newItem.Images[0],
               quantity:1,
              
            })
       }
       else{
           existingItem.quantity = existingItem.quantity+1
       }
        },
        RemoveFromCart(state,action){
            const newItemId = action.payload;
            const existingItem = state.items.find(data=> data._id === newItemId);
            if(existingItem.quantity===1){
                state.totalQuantity--;
                state.totalAmount-=existingItem.price ; 
                state.items = state.items.filter(data=> data._id !== existingItem._id);
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