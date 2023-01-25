import {configureStore} from "@reduxjs/toolkit";
import { loginReducer, updateReducer, userReducer } from "./Reducer/user.js";
//  eslint-disable no-underscore-dangle 
const store = configureStore({
    reducer:{
        user: userReducer,
        login:loginReducer,
        update:updateReducer
    },
    
}

);
//  eslint-enable 
export default store;