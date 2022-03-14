import React from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch } from 'react-redux';
import { authLogin } from "../../store/fetchActions";
import { useSelector } from 'react-redux';
import { Logo } from "../../assets/Icons";

import {
    Container,
    FormContainer,
    Form,
    ContainerInput,
    InputForm,
    LabelInput,
    Button,
    TitleContainer,
    SubTitle,
    ErrorDiv,
    ErrorText,
    FormErrorDiv
} from "./styles";

const schema = yup.object({
    email: yup.string()
        .required('O campo Email não pode ser vazio')
        .email('O Email inserido não é um Email válido'),

    password: yup.string()
        .required('O campo senha não pode ser vazio'),

}).required();

export const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const dispatch = useDispatch();

    const { error } = useSelector((state) => state.auth);

    function submitForm(data) {
        dispatch(authLogin(data));
    }

    return (
        <Container>
            <FormContainer>
                <TitleContainer>
                    <Logo width="104.4" height="36" color="#fff" />
                    <SubTitle>Books</SubTitle>
                </TitleContainer>
                <Form onSubmit={handleSubmit(submitForm)}>
                    <ContainerInput>
                        <InputForm
                            placeholder="Email"
                            type="text"
                            name="email"
                            {...register("email")}
                        />
                        <LabelInput>Email</LabelInput>
                        {
                            errors.email?.message &&
                            <FormErrorDiv>
                                <ErrorText>{errors.email?.message}</ErrorText>
                            </FormErrorDiv>
                        }
                    </ContainerInput>
                    <ContainerInput>
                        <InputForm
                            placeholder="Senha"
                            type="password"
                            name="password"
                            {...register("password")}
                        />
                        <LabelInput>Senha</LabelInput>
                        <Button>Entrar</Button>
                        {
                            errors.password?.message &&
                            <FormErrorDiv>
                                <ErrorText>{errors.password?.message}</ErrorText>
                            </FormErrorDiv>
                        }
                    </ContainerInput>


                    {
                        error ?
                            <ErrorDiv>
                                <ErrorText>{error}</ErrorText>
                            </ErrorDiv>
                            : null
                    }
                </Form>
            </FormContainer>
        </Container>
    )
}