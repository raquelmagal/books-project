import React from 'react';

import {
  Container,
  BookContent,
  InfoBox,
  Image,
  Title,
  Author,
  Info,
  InfoData
} from './styles';

export function Book({ book, onClick }) {

  return (
    <Container onClick={onClick}>
      <BookContent>
        <Image src={book.imageUrl}></Image>
        <InfoBox>
          <Title>{book.title}</Title>
          <Author>{book.authors.reduce(
            (acc, el, i, arr) => acc.concat(i === arr.length - 1 ? el : `${el}, `),
            ''
            )}
          </Author>
          <Info>
            <InfoData>{book.pageCount}</InfoData>
            <InfoData>{book.publisher}</InfoData>
            <InfoData>{book.published}</InfoData>
          </Info>
        </InfoBox>
      </BookContent>
    </Container>
  );
}