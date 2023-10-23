import React from "react";

import { useNavigation } from "@react-navigation/native";
import { PlusIcon } from "react-native-heroicons/solid";
import * as S from "./styles";

const NewTransactionButton: React.FC = () => {
  const { navigate } = useNavigation();
  const onPress = () => {
    navigate("NewTransaction" as never);
  };
  return (
    <S.Container onPress={onPress}>
      <PlusIcon />
    </S.Container>
  );
};

export default NewTransactionButton;
