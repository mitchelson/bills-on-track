import React from "react";
import { currencyView } from "../../../../src/common";
import { MonthlyFinanceProps } from "../../../../src/types";
import * as S from "./styles";

const MonthlyFinanceBox: React.FC<MonthlyFinanceProps> = (props) => {
  return (
    <S.Container>
      <S.MonthText>Balanço de {props.month}</S.MonthText>
      <S.Box>
        <S.BoxValue>
          <S.ValueTitleText>Receitas Previstas</S.ValueTitleText>
          <S.ValueText type={"current"}>
            {currencyView(props.expectedRevenue)}
          </S.ValueText>
        </S.BoxValue>
        <S.Divider />
        <S.BoxValue>
          <S.ValueTitleText>Gastos Previstos</S.ValueTitleText>
          <S.ValueText type={"expenses"}>
            {currencyView(props.monthlyExpenses)}
          </S.ValueText>
        </S.BoxValue>
        <S.Divider />
        <S.BoxValue>
          <S.ValueTitleText>Saldo Previsto</S.ValueTitleText>
          <S.ValueText type={"expected"}>
            {currencyView(props.expectedBalance)}
          </S.ValueText>
        </S.BoxValue>
      </S.Box>
    </S.Container>
  );
};

export default MonthlyFinanceBox;
