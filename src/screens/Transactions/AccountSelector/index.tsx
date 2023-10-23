import React from "react";

import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import * as S from "./styles";

const AccountSelector = () => {
  const {} = useSelector((store) => store.transactions);
  return (
    <S.Container>
      <S.LineOfModal />
      <S.TitleText>{`Selecionar categoria\n`}</S.TitleText>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Object.keys(categories)}
        renderItem={_renderItem}
      />
    </S.Container>
  );
};

export default AccountSelector;
