import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import { firestoreApi } from "./firestoreApi";
import userReducer from "../features/users/userSlice"

export const store = configureStore({
    reducer: {
        [firestoreApi.reducerPath]: firestoreApi.reducer,
        user: userReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat()
})