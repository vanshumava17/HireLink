import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice"
import profileReducer from "./slices/ProfileSlice"

export default configureStore({
    reducer:{
        user:userReducer,
        profile:profileReducer
    }
})