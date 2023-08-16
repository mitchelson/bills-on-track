import { useNavigation } from "@react-navigation/native";
import * as AuthGoogle from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";
import React, { useEffect } from "react";
import { Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { imageLoginScreen } from "../../../assets";
import { logIn, logOf } from "../../../store/actions/user.actions";
import IconGoogle from "../../assets/icons/google.png";
import * as S from "./styles";

const Register = () => {
  AuthGoogle.AuthRequest;
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLogged);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "981331326290-jagqia50991ib7q6k71u7lm1p4ghccc6.apps.googleusercontent.com",
    iosClientId:
      "981331326290-8ojibkijikulchgj81ngip587me4shh2.apps.googleusercontent.com",
  });

  const getUserInfo = async (token: string) => {
    if (!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const user = await response.json();
      dispatch(logIn(user));
    } catch (err) {}
  };

  const handleSingInWithGoogle = async () => {
    if (!isLogged) {
      if (
        response?.type === "success" &&
        response.authentication?.accessToken
      ) {
        await getUserInfo(response.authentication?.accessToken);
      } else {
        dispatch(logOf());
      }
    }
  };

  const { navigate } = useNavigation();

  const handleTerms = () => {
    navigate("TermsOfUse" as never);
  };

  useEffect(() => {
    handleSingInWithGoogle();
  }, [response]);

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
          <S.Text>{`Vamos ajudá-lo a tomar o controle de suas finanças de maneira simples e intuitiva.`}</S.Text>
        </S.Box>
        <S.Box>
          <S.Button onPress={() => promptAsync()}>
            <Image
              resizeMethod="resize"
              resizeMode="contain"
              style={{
                height: 30,
              }}
              source={IconGoogle}
            />
            <S.TextButton>Continuar com Google</S.TextButton>
          </S.Button>
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

export default Register;
