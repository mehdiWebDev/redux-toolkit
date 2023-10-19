
import {configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";







// 2. Create a store
const store = configureStore({
    reducer:{ counter: counterReducer, auth: authReducer}
});




export default store;
