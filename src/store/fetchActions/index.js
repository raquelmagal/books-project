import { login, loginError } from "../ducks/auth";
import { getBooks } from "../ducks/books"
import { getBook, resetBook } from '../ducks/book'
import apiService from "../../services/api.service";

export const authLogin = (user) => {

    const options = {
        headers: { 'Content-Type': 'application/json' }
    }

    return dispatch => {
        apiService.post('/auth/sign-in', user, options)
            .then(res => {
                localStorage.setItem('token', res.headers.authorization);
                localStorage.setItem('userName', res.data.name);
                dispatch(login());
                window.location.pathname = '/';

            })
            .catch((error) => {
                console.log(error.response.data.errors.message);
                dispatch(loginError(error.response.data.errors.message))
            })
    }
}

export const fetchBooks = (page) => {
    const options = {
        headers: { 'Content-Type': 'application/json', 'Authorization': "Bearer" + " " + localStorage.getItem('token') }
    }

    return dispatch => {
        apiService.get('/books?page=' + page + '&amount=12', options)
            .then(res => {
                dispatch(getBooks(res.data.data))
            }
            )
            .catch((error) => {
                console.log("ERRO: ", error);
            })
    }
}

export const getTotalPages = async () => {
    const options = {
        headers: { 'Content-Type': 'application/json', 'Authorization': "Bearer" + " " + localStorage.getItem('token') }
    }

    try {
        const response = await apiService.get('/books?page=1&amount=12', options)
        return response.data.totalPages;
    } catch (error) {
        console.log(error);
    }



}

export const getBookByID = (id) => {
    const options = {
        headers: { 'Content-Type': 'application/json', 'Authorization': "Bearer" + " " + localStorage.getItem('token') }
    }

    return dispatch => {
        apiService.get('/books/' + id, options)
            .then(res => {
                dispatch(getBook(res.data))
            }
            )
            .catch((error) => {
                console.log("ERRO: ", error);
            })
    }
}

export const cleanBookState = (obj) => {
    return dispatch => {
        dispatch(resetBook(obj))
    }
}
