import { useNavigation } from "@react-navigation/native";
import React from "react";
import Button from "../../../../core/ui/components/Button";
import InputForm from "../../../../core/ui/components/InputForm";
import { LogoIcon } from "../../../assets";
import { RecoverPassScreenProps } from "../../../types/navigation";
import * as S from "./styles";
import { useLogin } from "./viewModel";

const RecoverPass = ({ navigation }: RecoverPassScreenProps) => {
  const { promptAsync, signIn, loading } = useLogin();

  const { navigate } = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <S.Container>
      <S.Content>
        <S.Box>
          <LogoIcon width={60} height={60} />
          <S.Title>{`Esqueceu a senha?`}</S.Title>
          <S.Text>{`Sem problemas, vamos te ajudar a recuperá-la. Insira seu email que vamos enviar um código de recuperação de senha.`}</S.Text>
        </S.Box>
        <S.BoxLeft>
          <InputForm
            keyboardType="email-address"
            label="E-mail"
            autoCapitalize="none"
            placeholder="seuemail@mail.com"
          />
        </S.BoxLeft>
        <Button text="Recuperar" />
        <S.TermText>ou</S.TermText>
        <S.UnderlineTermText onPress={handleLogin}>
          Entrar com minha conta
        </S.UnderlineTermText>
      </S.Content>
    </S.Container>
  );
};

export default RecoverPass;
