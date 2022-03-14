import styled from 'styled-components';
import background from '../../assets/books-background.png'

export const Container = styled.div`
  background-image: url(${background});
  background-blend-mode: darken;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  width: fit-content;
  padding: 30px 76px;

  @media (max-width: 800px){
    padding: 20px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const SubTitle = styled.span`
  font-family: "Heebo", sans-serif;
  color: #000;
  font-weight: 300, "Light";
  font-size: 28px;
  line-height: 40px;
  font-style: normal;
  margin-left: 20px;
`

export const Message = styled.p`
  font-family: 'Heebo', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: right;
  color: #333333;
  margin-right: 20px;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const BooksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 800px) {
    grid-template-rows: auto;
    grid-template-columns: 100%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  position: fixed;
  top: 10px;
  right: 15px;
  z-index: 1;

  @media (max-width: 800px) {
    top: 4px;
    right: 8px;
  }
`;

export const Button = styled.div`
  display: flex;
  cursor: pointer;
  z-index: 1000;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #333333;
  margin-right: 30px;

  @media (max-width: 800px) {
    justify-content: center;
  }
`;

export const PreviousContainer = styled.div`
  margin: 0 5px 0 16px; 
  cursor: pointer;
`

export const NextContainer = styled.div`
  margin-Left: 5px; 
  cursor: pointer;
`;

export const PageSpan = styled.span`
  font-size: 14px;
`
export const LogoutContainer = styled.div`
  cursor: pointer;
  margin-right: 25px;
`