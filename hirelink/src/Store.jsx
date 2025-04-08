import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice";
import profileReducer from "./slices/ProfileSlice";
import filterReducer from "./slices/FilterSlice";
import sortReducer from "./slices/SortSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    filter: filterReducer,
    sort: sortReducer,
  },
});
