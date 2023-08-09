import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { calcBalance } from "../../../common";
import { setBalance } from "../../../store/actions/transactions.actions";
import Button from "../../Button";
import * as S from "./styles";

const EditBalance = () => {
  const { goBack } = useNavigation();
  const dispatch = useDispatch();
  const { balance } = useSelector((store) => store.transactions);

  const [balanceField, setBalanceField] = useState(0);
  const [warningLabel, setWarningLabel] = useState("");
  const [diffCurrentBalance, setDiffCurrentBalance] = useState<
    "positive" | "negative" | ""
  >("");

  function floatToCents(x: number | null) {
    const floatValue = x || 0;
    setBalanceField(Number(floatValue));
    const cents = Math.round(floatValue * 100);
    if (cents === 0) {
      setDiffCurrentBalance("");
      setWarningLabel("");
      return;
    }
    if (cents > balance) {
      setDiffCurrentBalance("positive");
      setWarningLabel(
        `${calcBalance(cents - balance)} a mais do que o saldo atual 🤑`,
      );
    } else if (balance > cents) {
      setDiffCurrentBalance("negative");
      setWarningLabel(
        `${calcBalance(balance - cents)} a menos do que o saldo atual 😤`,
      );
    } else {
      setWarningLabel("");
    }
  }

  const handleSetBalance = () => {
    const cents = Math.round(balanceField * 100);
    if (cents !== balance) {
      dispatch(setBalance(cents));
    }
    goBack();
  };

  return (
    <S.Container>
      <S.TitleLabel>Editar Saldo Atual</S.TitleLabel>
      <S.BoxInput>
        <S.CurrencyLabel>R$</S.CurrencyLabel>
        <S.BalanceLabel
          value={balanceField}
          onChangeValue={floatToCents}
          returnKeyType="done"
          autoFocus
        />
      </S.BoxInput>
      <S.WarningBalance diffCurrentBalance={diffCurrentBalance}>
        {warningLabel}
      </S.WarningBalance>
      <Button text="Confirmar" onPress={handleSetBalance} />
      <S.FriendlyMessage>{"⬇"}</S.FriendlyMessage>
      <S.FriendlyMessage>
        {"Que tal registar seus gastos?\n"}
        {"É só clicar no botão ➕ na tela anterior.\n\n"}
        {"Você pode editar o seu saldo\n"}
        {"Mas faça isso sabedoria Jovem 🧐"}
      </S.FriendlyMessage>
    </S.Container>
  );
};

export default EditBalance;
