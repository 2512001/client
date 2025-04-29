import { createSlice } from '@reduxjs/toolkit';

    const initialState = {
        user : null,
        login : false
    };

    const userSlice  =createSlice({
        name : 'user',
        initialState,
        reducers : {
            setUser : (state , action)=>{
                console.log(action.payload);
                state.user =  action.payload;
                state.login  = true
            },
            setlogout : (state , action)=>{
                state.user = null,
                state.login = false
            }
        }

    });


    export const {setUser , setlogout} = userSlice.actions;
    export default userSlice.reducer;