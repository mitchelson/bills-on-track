import React, { useState } from "react";
import { ActivityIndicator, Image } from "react-native";
import { LogoIcon } from "../../../assets";
import IconGoogle from "../../../assets/icons/google.png";
import Button from "../../../components/Button";
import InputForm from "../../../components/InputForm";
import { LoginScreenProps } from "../../../types/navigation";
import * as S from "./styles";
import { useLogin } from "./viewModel";

const Login = ({ navigation }: LoginScreenProps) => {
  const { promptAsync, signIn, loading, loginWithGitHub } = useLogin();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleTerms = () => {
    navigation.navigate("TermsOfUse");
  };

  const handleRecoverPass = () => {
    navigation.navigate("RecoverPass");
  };

  return (
    <S.Container>
      <S.Content>
        <S.Box>
          <LogoIcon width={60} height={60} />

          <S.Title>{`Bem vindo de volta!`}</S.Title>
          <S.Text>{`Acesse a sua conta e comece a transformar as suas finanças.`}</S.Text>
        </S.Box>
        <S.BoxLeft>
          <S.TitleLogin>Entrar</S.TitleLogin>
          <InputForm
            keyboardType="email-address"
            label="E-mail"
            autoCapitalize="none"
            placeholder="seuemail@mail.com"
            onChangeText={setEmail}
            value={email}
          />
          <InputForm
            label="Senha"
            autoCapitalize="none"
            placeholder="************"
            returnKeyType="done"
            onChangeText={setPass}
            value={pass}
          />
          <S.ForgotPassText onPress={handleRecoverPass}>
            Esqueci minha senha
          </S.ForgotPassText>
          <Button text="Entrar" />
        </S.BoxLeft>
        <S.TermText>ou</S.TermText>

        <S.Box>
          <S.BoxRow>
            <S.Button onPress={() => promptAsync()}>
              {loading ? (
                <ActivityIndicator />
              ) : (
                <Image
                  resizeMethod="resize"
                  resizeMode="contain"
                  style={{
                    height: 30,
                  }}
                  source={IconGoogle}
                />
              )}
            </S.Button>
            {/* <S.Button onPress={() => loginWithGitHub()}>
              {loading ? (
                <ActivityIndicator />
              ) : (
                <Image
                  resizeMethod="resize"
                  resizeMode="contain"
                  style={{
                    height: 30,
                  }}
                  source={GitHubIcon}
                />
              )}
            </S.Button> */}
          </S.BoxRow>

          <S.TermText>
            Ao continuar, estou de acordo com os{" "}
            <S.UnderlineTermText onPress={handleTerms}>
              Termos de Uso
            </S.UnderlineTermText>{" "}
            e com o{" "}
            <S.UnderlineTermText onPress={handleTerms}>
              Aviso de Privacidade.
            </S.UnderlineTermText>
          </S.TermText>
        </S.Box>
      </S.Content>
    </S.Container>
  );
};

export default Login;
