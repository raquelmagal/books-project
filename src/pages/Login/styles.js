import styled from 'styled-components';
import background from '../../assets/background-image.png';


export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${background});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const FormContainer = styled.div`
  display: flex;
  height: 100%;
  padding-left: 60px;
  flex-direction: column;
  justify-content: center;

  @media(max-width: 600px) {
    padding-left: 0px;
    }

`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px 0 0 10px;
  align-items: center;
`

export const SubTitle = styled.div`
  font-family: "Heebo", sans-serif;
  color: #fff;
  font-weight: 300, "Light";
  font-size: 28px;
  line-height: 40px;
  font-style: normal;
  margin-left: 20px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 10px;
`

export const LabelInput = styled.label`
  color: white;
  font-weight: normal;
  opacity: 0.75;
  padding-left: 2px;
  position: absolute;
  margin-top: 20px;
  padding: 0px 12px;
  transition: 0.2s ease all;
`


export const InputForm = styled.input`
  font-size: 16px;
  height: 68px;
  width: 340px;
  padding: 0px 12px;
  border-radius: 7px;
  border: none;
  background-color: #25171A;
  opacity: 0.6;
  color: white;

  @media (max-width: 800px) {
    width: min(100%, 280px);
  }
  
  ::placeholder{
    color: transparent;
  }

  &:not(:focus) {
    color: transparent;
  }

  &:not(:placeholder-shown) + ${LabelInput}{
    color: white;
    margin-top: 3px;
    font-size: 12px;
  }
  &:not(:placeholder-shown){
    color: white;
  }

  &:focus + ${LabelInput} {
    color: white;
    margin-top: 3px;
    font-size: 12px;
  }

  &:focus{
    color: white;
  }
`

export const Button = styled.button`
  position: absolute;
  left: 260px;
  background-color: white; 
  border: none;
  color: #AA5042;
  padding: 9px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  font-weight: bold;
  margin-top: 15px;
  border-radius: 19px;
  cursor: pointer;

  @media (max-width: 800px) {
    left: 210px;
  }

`
export const FormErrorDiv = styled.div`
  left: 80px;
  opacity: 0.88;  
  line-height: 15px;
  transition: 1s;
  width: 205px;
`

export const ErrorDiv = styled.div`
  margin-left: 10px;
  background-color: #9E91A4;
  opacity: 0.88;
  padding: 8px 15px; 
  border-radius: 5px; 
  line-height: 15px;
  transition: 1s;
  width: 205px;
`

export const ErrorText = styled.p`
  color: white; 
  font-weight: bold;
`





