import * as Google from "expo-auth-session/providers/google";
import React, { useEffect } from "react";
import { Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import IconGoogle from "../../assets/icons/google.png";
import { logIn, logOf } from "../../store/actions/user.action";
import * as S from "./styles";

const Auth = () => {
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

  useEffect(() => {
    handleSingInWithGoogle();
  }, [response]);

  return (
    <S.Container>
      <S.Content>
        <S.Title>{`Bills On Track`}</S.Title>
        <S.Text>{`Seu gerenciador\npessoal finanças`}</S.Text>
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
      </S.Content>
    </S.Container>
  );
};

export default Auth;
