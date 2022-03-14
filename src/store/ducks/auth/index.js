import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    isAuthenticated: localStorage.getItem('token'),
    error: ""
}

export const login = createAction('LOGIN')
export const logout = createAction('LOGOUT');
export const loginError = createAction('LOGIN_ERROR')

export default createReducer(INITIAL_STATE, {
    [login.type]: (state, action) => ({ ...state, isAuthenticated: true, error: "" }),
    [logout.type]: (state, action) => ({ ...state, isAuthenticated: false }),
    [loginError.type] : (state,action) => ({...state, error: action.payload})
})