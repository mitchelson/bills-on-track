import React from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import * as S from "./styles";

const Settings = () => {
  const handleLogOf = async () => {
    await AsyncStorage.removeItem("@BOT:user");
  };

  return (
    <S.Container>
      <S.Content>
        <S.TitlePage>Configurações</S.TitlePage>
      </S.Content>
      <S.Button onPress={handleLogOf}>
        <S.TextButton>Sair</S.TextButton>
      </S.Button>
    </S.Container>
  );
};

export default Settings;
