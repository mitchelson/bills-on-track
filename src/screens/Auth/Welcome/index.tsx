import React from "react";
import { imageLoginScreen } from "../../../assets";
import Button from "../../../components/Button";
import { WelcomeScreenProps } from "../../../types/navigation";
import * as S from "./styles";

const Welcome = ({ navigation }: WelcomeScreenProps) => {
  const handleRegister = () => {
    navigation.navigate("Register");
  };

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <S.Container>
      <S.Content>
        <S.Box>
          <S.ImageWomen
            resizeMethod="resize"
            resizeMode="stretch"
            source={imageLoginScreen}
          />
          <S.Title>{`Controle financeiro na palma da sua mão!`}</S.Title>
          <S.Text>{`Aprenda a controlar seus gastos de forma eficiente e alcance suas metas financeiras com facilidade.  Vamos ajudá-lo a tomar o controle de suas finanças de maneira simples e intuitiva.`}</S.Text>
        </S.Box>
        <S.Box>
          <Button text="Entrar" onPress={handleLogin} />
          <S.TermText>
            Não tem uma conta?{" "}
            <S.LinkToRegister onPress={handleRegister}>
              Cadastrar
            </S.LinkToRegister>
          </S.TermText>
        </S.Box>
      </S.Content>
    </S.Container>
  );
};

export default Welcome;
