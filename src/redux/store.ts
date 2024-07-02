import { configureStore } from "@reduxjs/toolkit";

import cardsReducer from '../redux/features/auth-slice'

export const  store = configureStore({
    reducer:{
        cardsReducer
    }
})

export default store;
