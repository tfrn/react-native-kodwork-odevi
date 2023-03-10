import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from './favorite/favoriteRedux';
import selectReducer from './selected/selectedRedux';
export const store = configureStore({
    reducer: {
        favorite: favoriteReducer,
        select: selectReducer
    },
})
