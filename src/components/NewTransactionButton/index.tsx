import React from "react";

import { useNavigation } from "@react-navigation/native";
import Icons from "../Icons";
import * as S from "./styles";

const NewTransactionButton: React.FC = () => {
  const { navigate } = useNavigation();
  const onPress = () => {
    navigate("NewTransaction");
  };
  return (
    <S.Container onPress={onPress}>
      <Icons name="plus" color="#fff" />
    </S.Container>
  );
};

export default NewTransactionButton;
