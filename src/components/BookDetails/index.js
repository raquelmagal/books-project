import React from 'react';
import { Quotes } from '../../assets/Icons';

import {
  BookContent,
  InfoBox,
  Image,
  Title,
  Author,
  Info,
  ItemTitle,
  ItemSubtitle,
  Item,
  TitleDescription,
  Description,
  InformationItem,
} from './styles';

export function BookDetails({ book }) {
  
  const information = {
    title: 'Informações',
    pages: 'Páginas',
    publishingCompany: 'Editora',
    publish: 'Publicação',
    language: 'Idioma',
    originalTitle: 'Título Original',
    firstIsbn: 'ISBN-10',
    secondIsbn: 'ISBN-13',
  }

  if(!Object.keys(book).length) {return <p>Carregando...</p>}

  return (
      <BookContent>
        <div style={{ display: 'flex' }}>
          <Image src={book.imageUrl}></Image>
        </div>
        <InfoBox>
          <Title>
            {book.title}<br/>
            Second line example
          </Title>
          <Author>
            {book.authors.reduce(
              (acc, el, i, arr) => acc.concat(i === arr.length - 1 ? el : `${el}, `),
              ''
            )}
          </Author>
          <Info>
            <ItemTitle>{information.title}</ItemTitle>
            <InformationItem>
              <ItemSubtitle>{information.pages}</ItemSubtitle>
              <Item>{book.pageCount}</Item>
            </InformationItem>
            <InformationItem>
              <ItemSubtitle>{information.publishingCompany}</ItemSubtitle>
              <Item>{book.publisher}</Item>
            </InformationItem>
            <InformationItem>
              <ItemSubtitle>{information.publish}</ItemSubtitle>
              <Item>{book.published}</Item>
            </InformationItem>
            <InformationItem>
              <ItemSubtitle>{information.language}</ItemSubtitle>
              <Item>{book.language}</Item>
            </InformationItem>
            <InformationItem>
              <ItemSubtitle>{information.originalTitle}</ItemSubtitle>
              <Item>{book.title}</Item>
            </InformationItem>
            <InformationItem>
              <ItemSubtitle>{information.firstIsbn}</ItemSubtitle>
              <Item>{book.isbn10}</Item>
            </InformationItem>
            <InformationItem>
              <ItemSubtitle>{information.secondIsbn}</ItemSubtitle>
              <Item>{book.isbn13}</Item>
            </InformationItem>
          </Info>
          <TitleDescription>Resenha da Editora</TitleDescription>
          <Description>
            <Quotes width={17.58} height={14.14} color='#333'/>
            {book.description}
          </Description>
        </InfoBox>
      </BookContent>
  );
}


