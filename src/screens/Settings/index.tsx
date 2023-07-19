import React from "react";

import { useDispatch } from "react-redux";
import { logOf } from "../../store/actions/user.action";
import * as S from "./styles";

const Settings = () => {
  const dispatch = useDispatch();
  const handleLogOf = async () => {
    dispatch(logOf());
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
