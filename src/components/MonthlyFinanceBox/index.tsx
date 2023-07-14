import React from "react";
import { BillDTO, MonthlyFinanceProps } from "../../types";
import * as S from "./styles";

const MonthlyFinanceBox: React.FC<MonthlyFinanceProps> = (props) => {
  const data = {
    "7/2023": {
      "123": {
        type: "outcome",
        value: 56489,
        description: "",
        categoryId: "",
        name: "",
        id: "",
        isRecurringPayment: false,
        frequencyInterval: "",
        installments: 0,
        endDate: "",
        paymentDate: "",
        status: "",
        createdAt: "",
        updatedAt: "",
      } as BillDTO,
    },
  };
  return (
    <S.Container>
      <S.MonthText>Balanço - {props.month}</S.MonthText>
      <S.Box>
        <S.BoxValue>
          <S.ValueTitleText>Saldo Atual</S.ValueTitleText>
          <S.ValueText>
            <S.ValueTitleText>R$</S.ValueTitleText> {props.currentBalance}
          </S.ValueText>
        </S.BoxValue>
        <S.Divider />
        <S.BoxValue>
          <S.ValueTitleText>Gastos Previstos</S.ValueTitleText>
          <S.ValueText>
            <S.ValueTitleText>R$</S.ValueTitleText> {props.monthlyExpenses}
          </S.ValueText>
        </S.BoxValue>
        <S.Divider />
        <S.BoxValue>
          <S.ValueTitleText>Saldo Previsto</S.ValueTitleText>
          <S.ValueText>
            <S.ValueTitleText>R$</S.ValueTitleText> {props.expectedBalance}
          </S.ValueText>
        </S.BoxValue>
      </S.Box>
    </S.Container>
  );
};

export default MonthlyFinanceBox;
