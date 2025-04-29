import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';

const store = configureStore({
    reducer : {
        userDetails : userReducer
    }
});


export default store;