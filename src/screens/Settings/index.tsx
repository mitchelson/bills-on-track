import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { ArrowLeftIcon, ArrowRightIcon } from "react-native-heroicons/solid";
import { useDispatch } from "react-redux";
import { deleteAllTransaction } from "../../store/actions/transactions.actions";
import { logOf } from "../../store/actions/user.actions";
import * as S from "./styles";

const Settings = () => {
  const dispatch = useDispatch();
  const handleLogOf = async () => {
    dispatch(logOf());
  };

  const deleteTransaction = async () => {
    dispatch(deleteAllTransaction());
  };

  return (
    <S.Container>
      <S.Content>
        <S.TitlePage>Configurações</S.TitlePage>
        <S.General>
          <S.Button>
            <S.Row>
              <S.BoxIcons>
                <Ionicons
                  name="moon"
                  size={32}
                  color="white"
                  style={{ padding: 4 }}
                />
              </S.BoxIcons>
              <S.TextTitle>Tema</S.TextTitle>
            </S.Row>
            <ArrowLeftIcon />
          </S.Button>
          <S.Button>
            <S.Row>
              <S.BoxIcons>
                <ArrowLeftIcon />
              </S.BoxIcons>
              <S.TextTitle>Ordem dos lançamentos</S.TextTitle>
            </S.Row>
            <ArrowRightIcon />
          </S.Button>
          <S.Button onPress={deleteTransaction}>
            <S.Row>
              <S.BoxIcons>
                <ArrowLeftIcon />
              </S.BoxIcons>
              <S.TextTitle>Apagar transações</S.TextTitle>
            </S.Row>
            <ArrowRightIcon />
          </S.Button>
        </S.General>

        {/* <S.Security>
          <S.Button>
            <Ionicons
              name="key"
              size={32}
              color="white"
              style={{ padding: 4 }}
            />
            <S.TextTitle>Opções de acesso</S.TextTitle>
            <Icons name="arrow-right" />
          </S.Button>
          <S.Button>
            <S.TextTitle>Ordem dos lançamentos</S.TextTitle>
            <Icons name="arrow-right" />
          </S.Button>
          <S.Button>
            <S.TextTitle>Ordem dos lançamentos</S.TextTitle>
            <Icons name="arrow-right" />
          </S.Button>
          <S.Button>
            <S.TextTitle>Ordem dos lançamentos</S.TextTitle>
            <Icons name="arrow-right" />
          </S.Button>
        </S.Security> */}
      </S.Content>
      <S.Button onPress={handleLogOf}>
        <S.TextButton>Sair</S.TextButton>
      </S.Button>
    </S.Container>
  );
};

export default Settings;
