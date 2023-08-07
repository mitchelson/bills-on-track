import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import Icons from "../../components/Icons";
import { logOf } from "../../store/actions/user.action";
import * as S from "./styles";

const Settings = () => {
  const dispatch = useDispatch();
  const handleLogOf = async () => {
    dispatch(logOf());
  };

  return (
    <S.Container>
      <S.TitlePage>Configurações</S.TitlePage>
      <S.Box>
        <S.General>
          <S.Button >
            <View style={{ backgroundColor: '#16C64F', borderRadius: 8 }}>
              <Ionicons name="moon" size={32} color="white" style={{ padding: 4 }} />
            </View>
            <S.TextTitle>Tema</S.TextTitle>
            <Icons name="arrow-right" />
          </S.Button>
          <S.Button >
            <View style={{ backgroundColor: '#16C64F', borderRadius: 8 }}>
              <Icons name="arrow-down-circle" color="white" style={{ padding: 4 }} />
            </View>
            <S.TextTitle>Ordem dos lançamentos</S.TextTitle>
            <Icons name="arrow-right" />
          </S.Button>
        </S.General>

        <S.Security>
          <S.Button >
            <Ionicons name="key" size={32} color="white" style={{ padding: 4 }} />
            <S.TextTitle>Opções de acesso</S.TextTitle>
            <Icons name="arrow-right" />

          </S.Button>
          <S.Button >
            <S.TextTitle>Ordem dos lançamentos</S.TextTitle>
            <Icons name="arrow-right" />
          </S.Button>
          <S.Button >
            <S.TextTitle>Ordem dos lançamentos</S.TextTitle>
            <Icons name="arrow-right" />
          </S.Button>
          <S.Button >
            <S.TextTitle>Ordem dos lançamentos</S.TextTitle>
            <Icons name="arrow-right" />
          </S.Button>
        </S.Security>
      </S.Box>
      <S.Button onPress={handleLogOf}>
        <S.TextButton>Sair</S.TextButton>
      </S.Button>
    </S.Container>
  );
};

export default Settings;
