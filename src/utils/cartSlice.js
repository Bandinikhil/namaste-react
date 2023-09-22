// import { createSlice, current } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     items: [],
//   },
//   reducers: {
//     addItem: (state, action) => {
//       // Redux Toolkit uses immer BTS
//       state.items.push(action.payload);
//     },
//     removeItem: (state, action) => {
//       // console.log(action.payload);
//       // const removeIndex = state.items.indexOf(action.payload);
//       // console.log(removeIndex) 
//       // state.items.splice(removeIndex,1);
//       //  console.log(state.items)
//       const itemIdToRemove = action.payload; // Assuming payload is the unique identifier of the item

//       // Find the index of the item to remove using findIndex
      

      
//         // Use filter to create a new array without the item to be removed
//         state.items = state.items.filter(item => item.card.info.id !== itemIdToRemove.card.info.id);
      
//   },
    
//     //originalState = {items: ["pizza"]}
//     clearCart: (state, action) => {
//       //RTK - either Mutate the existing  state or return a new State
//       // state.items.length = 0; // originalState = []

//       return { items: [] }; // this new object will be replaced inside originalState = { items: [] }
//     },
//   },
// });

// export const { addItem, removeItem, clearCart } = cartSlice.actions;

// export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name : "cart",
  initialState:{
    items:[],
  },
  reducers : {
    addItem : (state,action)=> {
      state.items.push(action.payload);
    },
    removeItem :(state , action)=>{
      let removeItem = action.payload;

      state.items = state.items.filter(item=> item.card.info.id !== removeItem.card.info.id)
    },
    clearCart : (state)=>{
        state.items.length = 0;
    }

  }
})

export const {addItem,removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
