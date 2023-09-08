import React from "react";
import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
} from "react-native-heroicons/solid";
import { darkTheme } from "../../../../../theme/colors";
import { HeaderNewTransactionProps } from "../../types";
import * as S from "./styles";

export const HeaderNewTransaction: React.FC<HeaderNewTransactionProps> = ({
  transactionType,
  onPress,
}) => {
  return (
    <S.Container>
      <S.TypeBox
        onPress={() => onPress("outcome")}
        type={"outcome"}
        activeType={transactionType}
      >
        <ArrowTrendingUpIcon
          color={transactionType === "outcome" ? darkTheme.red_500 : "gray"}
        />
        <S.TypeText type={"outcome"} activeType={transactionType}>
          Despesa
        </S.TypeText>
      </S.TypeBox>
      <S.TypeBox
        onPress={() => onPress("income")}
        type={"income"}
        activeType={transactionType}
      >
        <ArrowTrendingDownIcon
          color={transactionType === "income" ? darkTheme.green_500 : "gray"}
        />
        <S.TypeText type={"income"} activeType={transactionType}>
          Receita
        </S.TypeText>
      </S.TypeBox>
    </S.Container>
  );
};
