import { createAction, createReducer } from '@reduxjs/toolkit'

const INITIAL_STATE = {
    uniqueBook: {}
}
export const getBook = createAction('GET_BOOK')
export const resetBook = createAction('RESET_BOOK')

export default createReducer(INITIAL_STATE, {
  [getBook.type]: (state, action) => ({...state, uniqueBook: action.payload}),
  [resetBook.type]: (state, action) => ({uniqueBook: action.payload})
})