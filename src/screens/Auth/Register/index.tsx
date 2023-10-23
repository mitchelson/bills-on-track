import React from "react";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import Button from "../../../../core/ui/components/Button";
import InputForm from "../../../../core/ui/components/InputForm";
import { RegisterScreenProps } from "../../../types/navigation";
import * as S from "./styles";

const Register = ({ navigation }: RegisterScreenProps) => {
  const handleTerms = () => {
    navigation.navigate("TermsOfUse");
  };

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <S.Container>
      <S.Content>
        <S.BackButton onPress={handleBack}>
          <ArrowLeftIcon />
        </S.BackButton>
        <S.Box>
          <S.Title>{`É novo aqui? Vamos criar sua conta.`}</S.Title>
          <S.Text>{`É simples, basta adicionar seu nome, email e definir uma senha. Afinal, o objetivo é simplificar não é?`}</S.Text>
        </S.Box>
        <S.Box>
          <InputForm label="Nome e Sobrenome" placeholder="Fulano da Silva" />
          <InputForm label="E-mail" placeholder="fulano@email.com" />
          <InputForm label="Senha" placeholder="********" />
        </S.Box>
        <Button text="Criar e entrar" />
        <S.TermText>ou</S.TermText>
        <S.UnderlineTermText onPress={handleLogin}>
          Entrar com minha conta
        </S.UnderlineTermText>
      </S.Content>
    </S.Container>
  );
};

export default Register;
