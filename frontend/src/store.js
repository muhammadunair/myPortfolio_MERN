import {configureStore} from "@reduxjs/toolkit";
import { loginReducer, userReducer } from "./Reducer/user.js";
//  eslint-disable no-underscore-dangle 
const store = configureStore({
    reducer:{
        user: userReducer,
        login:loginReducer
    },
    
}

);
//  eslint-enable 
export default store;