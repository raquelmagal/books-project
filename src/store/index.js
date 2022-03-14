import { configureStore } from "@reduxjs/toolkit";
import rootBooks from './ducks/books'
import rootAuth from './ducks/auth';
import rootBook from './ducks/book'

export default configureStore({
    reducer: {
        books: rootBooks,
        auth: rootAuth,
        book: rootBook,
    }
})