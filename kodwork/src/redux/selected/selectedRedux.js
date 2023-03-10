import { createSlice } from "@reduxjs/toolkit";
export const selectSlice = createSlice({
    name: 'select',
    initialState:{
        value:[],
    },
    reducers:{
        selectAdd: (state, action) => {
        state.value.push(action.payload); 
        },
      
        selectDelete: (state, action) => {
            const index = state.value.findIndex(item => item.name === action.payload.name && item.company === action.payload.company && item.location === action.payload.location && item.level === action.payload.level);
            if (index !== -1) {
              state.value.splice(index, 1);
            }
          }
    },
});
export const {selectAdd, selectDelete} = selectSlice.actions;
export default selectSlice.reducer;