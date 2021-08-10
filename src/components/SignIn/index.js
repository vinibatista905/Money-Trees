import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SigninElements";

function SignIn() {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Money Trees</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Entre na sua conta</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Senha</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continuar</FormButton>
              <Text>Esqueci a senha</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
}

export default SignIn;
