import { createSlice } from "@reduxjs/toolkit";
export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState:{
        value:[],
    },
    reducers:{
       favoriteAdd: (state, action) => {
        state.value.push(action.payload);
        },
      
        favoriteDelete: (state, action) => {
            const index = state.value.findIndex(item => item.name === action.payload.name && item.company === action.payload.company && item.location === action.payload.location && item.level === action.payload.level);
            if (index !== -1) {
              state.value.splice(index, 1);
            }
          }
    },
});
export const {favoriteAdd, favoriteDelete} = favoriteSlice.actions;
export default favoriteSlice.reducer;