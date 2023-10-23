import React from "react";

import { useNavigation } from "@react-navigation/native";
import { currencyView } from "../../../../src/common";
import { BillDTO } from "../../../../src/types";
import CategoryIcon from "../CategoryIcons";
import * as S from "./styles";

type ReportItemProps = {
  transaction: BillDTO;
};

export const ReportItem: React.FC<ReportItemProps> = ({ transaction }) => {
  const { navigate } = useNavigation();
  const handleDetails = () => {
    navigate("DetailsTransaction" as never, {
      transaction,
    });
  };
  return (
    <S.Container onPress={handleDetails}>
      <CategoryIcon category={transaction.categoryId || "award"} />
      <S.BoxText>
        <S.TransactionName>{transaction.name}</S.TransactionName>
        <S.AccountName>Conta principal</S.AccountName>
      </S.BoxText>
      <S.TransactionValue type={transaction.type}>
        {currencyView(transaction.value)}
      </S.TransactionValue>
    </S.Container>
  );
};
