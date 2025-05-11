// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
 // Create this file next
import  userSlice  from "../reducers/userReducer";

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;
