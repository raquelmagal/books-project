import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = []

export const getBooks = createAction('ADD_BOOKS')

export default createReducer(INITIAL_STATE, {

    [getBooks.type]:(state,action) => [...state, action.payload],
})