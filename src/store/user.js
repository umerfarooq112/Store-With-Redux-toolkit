import {  createSlice } from "@reduxjs/toolkit";

const initialUser = sessionStorage.getItem('user')
 ? JSON.parse(sessionStorage.getItem('user'))
  : null

const slice = createSlice({
    name:'user',
    initialState:{
        user:initialUser
    },
    reducers: {
        loginSuccess: (state, action) => {
          state.user = action.payload;
          sessionStorage.setItem('user', JSON.stringify(action.payload))
        },
        logoutSuccess: (state, action) =>  {
          state.user = null;
          sessionStorage.removeItem('user')
        },
      },
})

export default slice.reducer

const {loginSuccess,logoutSuccess} = slice.actions

export const logout = ()=> async dispatch => {
    try 
    {
        // const res = await api.post('')
        return dispatch(logoutSuccess())
    }
    catch(e)
    {
        return console.error(e.message);
    }
}

export const login = ({ username, password }) => async dispatch => {
    try {
      // const res = await api.post('/api/auth/login/', { username, password })
      dispatch(loginSuccess({username}));
    } catch (e) {
      return console.error(e.message);
    }
  }