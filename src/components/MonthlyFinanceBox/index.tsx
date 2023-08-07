import React from "react";
import { calcBalance } from "../../common";
import { MonthlyFinanceProps } from "../../types";
import * as S from "./styles";

const MonthlyFinanceBox: React.FC<MonthlyFinanceProps> = (props) => {
  return (
    <S.Container>
      <S.MonthText>Balanço de {props.month}</S.MonthText>
      <S.Box>
        <S.BoxValue>
          <S.ValueTitleText>Receitas Previstas</S.ValueTitleText>
          <S.ValueText type={"current"}>
            {calcBalance(props.expectedRevenue)}
          </S.ValueText>
        </S.BoxValue>
        <S.Divider />
        <S.BoxValue>
          <S.ValueTitleText>Gastos Previstos</S.ValueTitleText>
          <S.ValueText type={"expenses"}>
            {calcBalance(props.monthlyExpenses)}
          </S.ValueText>
        </S.BoxValue>
        <S.Divider />
        <S.BoxValue>
          <S.ValueTitleText>Saldo Previsto</S.ValueTitleText>
          <S.ValueText type={"expected"}>
            {calcBalance(props.expectedBalance)}
          </S.ValueText>
        </S.BoxValue>
      </S.Box>
    </S.Container>
  );
};

export default MonthlyFinanceBox;
