import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

const initialState = {
  user: false,
  Auth:{}
};
  
export const userSlice = createSlice({
  name: 'user',
  initialState ,

  reducers: {
    login: (state,action) => {
      state.user = true; 
    },
    logOut: (state,action) => {
      state.user = false ;
    },
    userAuth: (state , action) => {
      state.Auth = action.payload;
    }
  },
 
});

export const { login , logOut , userAuth } = userSlice.actions;

export const selectUser = (state) => state.user.user ;
export const selectUserAuth = (state) => state.user.Auth ;

export default userSlice.reducer;
