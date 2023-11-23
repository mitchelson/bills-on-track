import React from "react";

import { Ionicons,MaterialIcons } from "@expo/vector-icons";
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
        <S.TitlePage>Geral</S.TitlePage>
        <S.General>
          <S.Button>
            
            <S.Row>
              <S.BoxIcons>
                <Ionicons
                  name="moon"
                  size={24}
                  color="white"
                  style={{ padding: 4 }}
                />
              </S.BoxIcons>
              <S.TextTitle>Tema</S.TextTitle>
            </S.Row>
            <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color="#212121"
                  style={{ padding: 4 }}
                />
          </S.Button>

          <S.Button>
            <S.Row>
              <S.BoxIcons>
              <MaterialIcons
                  name="import-export"
                  size={24}
                  color="white"
                  style={{ padding: 4 }}
                />
              </S.BoxIcons>
              <S.TextTitle>Ordem dos lançamentos</S.TextTitle>
            </S.Row>
            <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color="#212121"
                  style={{ padding: 4 }}
                />
          </S.Button>
        <S.TitlePage>Segurança</S.TitlePage>

          <S.Button onPress={deleteTransaction}>
            <S.Row>
              <S.BoxIcons>
              <MaterialIcons
                  name="vpn-key"
                  size={24}
                  color="white"
                  style={{ padding: 4 }}
                />
              </S.BoxIcons>
              <S.TextTitle>Opções de acesso</S.TextTitle>
            </S.Row>
            <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color="#212121"
                  style={{ padding: 4 }}
                />
          </S.Button>
        <S.TitlePage>Outras opções</S.TitlePage>
        <S.Button onPress={deleteTransaction}>
            <S.Row>
              
              <S.TextTitle>Excluir todas as minhas movimentações</S.TextTitle>
            </S.Row>
            <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color="#212121"
                  style={{ padding: 4 }}
                />
          </S.Button>
        <S.Button onPress={deleteTransaction}>
            <S.Row>
              
              <S.TextTitle style={{color:'#E8453E'}} >Excluir conta</S.TextTitle>
            </S.Row>
            <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color="#E8453E"
                  style={{ padding: 4 }}
                />
          </S.Button>
        <S.Button onPress={deleteTransaction}>
            <S.Row>
              
              <S.TextTitle>Políticas de privacidade</S.TextTitle>
            </S.Row>
            <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color="#212121"
                  style={{ padding: 4 }}
                />
          </S.Button>
        <S.Button onPress={deleteTransaction}>
            <S.Row>
              
              <S.TextTitle>Termos de uso</S.TextTitle>
            </S.Row>
            <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color="#212121"
                  style={{ padding: 4 }}
                />
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
      <S.Button style={{position:'absolute', bottom:0, paddingHorizontal:16, width:'100%'}} onPress={deleteTransaction}>
            <S.Row>
              
              <S.TextTitle style={{color:'#E8453E'}}>Sair do app</S.TextTitle>
            </S.Row>
            <MaterialIcons
                  name="logout"
                  size={24}
                  color="#E8453E"
                  style={{ padding: 4 }}
                />
          </S.Button>
    </S.Container>
  );
};

export default Settings;
