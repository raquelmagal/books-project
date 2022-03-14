import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import logoutService from '../../services/logout.service';
import { fetchBooks, getTotalPages, getBookByID, cleanBookState } from "../../store/fetchActions";
import { Book } from "../../components/Book";
import { BookDetails } from "../../components/BookDetails";
import { LoadComponent } from "../../components/LoadComponent";
import { Logo, Previous, Next, CloseIcon } from '../../assets/Icons';
import LogOutIcon from "../../assets/Icons/LogOutIcon";
import Modal from 'react-modal';

import {
    Container,
    Content,
    HeaderContainer,
    Header,
    SubTitle,
    Message,
    Footer,
    BooksContainer,
    Button,
    ButtonContainer,
    PreviousContainer,
    NextContainer,
    PageSpan,
    LogoutContainer
} from './styles'

export const Home = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedBookId, setSelectedBookId] = useState('');

    const dispatch = useDispatch();

    const { isAuthenticated } = useSelector((state) => state.auth);
    const books = useSelector((state) => state.books);
    const { uniqueBook } = useSelector((state) => state.book)

    const userName = localStorage.getItem('userName');

    function authLogoutButton() {
        isAuthenticated && dispatch(logoutService());
    }

    function handleNextPage() {
        if (currentPage === totalPages) {
            return
        }
        setCurrentPage(currentPage + 1)
    }

    function handlePrevPage() {
        if (currentPage === 1) {
            return
        }
        setCurrentPage(currentPage - 1)
    }

    const customStyles = {
        overlay: {
            background: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(2px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 100,
            margin: 0,
        },
        content: {
            boxSizing: 'border-box',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            height: 'min(90%, 500px)',
            width: 'min(90%, 750px)'
        },
    };

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        dispatch(cleanBookState({}))
        setIsOpen(false);
    }

    useEffect(() => {
        if (currentPage === 1 && books.length === 1) {
            dispatch(fetchBooks(currentPage))
        }
        else if (currentPage > books.length) {
            dispatch(fetchBooks(currentPage))
        }
        else if (currentPage < books.length) {
            return
        }
    }, [currentPage])

    useEffect(() => {
        async function totalPages() {
            setTotalPages(await getTotalPages())
        }
        totalPages()
    }, [])

    useEffect(() => {
        if (selectedBookId) {
            dispatch(getBookByID(selectedBookId))
            openModal();
        }
    }, [selectedBookId])

    return (
        <>
            <Container>
                <Content>
                    <HeaderContainer>
                        <Header>
                            <Logo width={104.4} height={36} color="#000" />
                            <SubTitle>Books</SubTitle>
                        </Header>
                        <Header>
                            <Message>Bem-vindo(a), <b>{userName}</b></Message>
                            <LogoutContainer style={{ cursor: 'pointer' }}>
                                <LogOutIcon width={32} onClick={authLogoutButton} />
                            </LogoutContainer>
                        </Header>
                    </HeaderContainer>
                    <BooksContainer>
                        {
                            books[currentPage - 1] ? books[currentPage - 1].map((book) => {
                                return (
                                    <Book book={book} key={book.id} onClick={() => setSelectedBookId(book.id)} />
                                )
                            })
                                :
                                <LoadComponent />
                        }
                    </BooksContainer>
                    <ButtonContainer>
                        {modalIsOpen &&
                            <Button onClick={closeModal}>
                                <CloseIcon width={32} />
                            </Button>
                        }
                    </ButtonContainer>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={modalIsOpen}
                        style={customStyles}
                    >
                        {
                            uniqueBook ? <BookDetails book={uniqueBook} />
                                :
                                <LoadComponent />
                        }
                    </Modal>
                    <Footer>
                        <PageSpan>Página <b>{currentPage}</b> de <b>{Math.floor(totalPages)}</b></PageSpan>
                        <PreviousContainer onClick={handlePrevPage}>
                            <Previous width={9} height={8} color="#333" opacity={currentPage === 1 && 0.4} />
                        </PreviousContainer>
                        <NextContainer onClick={handleNextPage}>
                            <Next width={9} height={8} color="#333" opacity={currentPage === Math.floor(totalPages) && 0.4} />
                        </NextContainer>
                    </Footer>
                </Content>
            </Container>
        </>
    )
}