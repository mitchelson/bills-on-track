import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Google from "expo-auth-session/providers/google";
import React, { useEffect } from "react";
import { Button } from "react-native";
import * as S from "./styles";

const Login = () => {
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
        }
      );

      const user = await response.json();
      await AsyncStorage.setItem("@BOT:user", JSON.stringify(user));
    } catch (err) {}
  };

  const handleSingInWithGoogle = async () => {
    const user = await AsyncStorage.getItem("@BOT:user");
    if (!user) {
      if (
        response?.type === "success" &&
        response.authentication?.accessToken
      ) {
        await getUserInfo(response.authentication?.accessToken);
      } else {
        // setUserInfo(JSON.parse (user) ) ;
      }
    }
  };

  useEffect(() => {
    handleSingInWithGoogle();
  }, [response]);

  return (
    <S.Container>
      <S.Title>Login Screen</S.Title>
      <Button title="Login" onPress={() => promptAsync()} />
    </S.Container>
  );
};

export default Login;
