import React from "react";

import { HeaderNewTransaction } from "./components/HeaderNewTransaction";
import * as S from "./styles";
import { useNewTransaction } from "./viewModel";

const NewTransaction = () => {
  const { transactionType, setTransactionType } = useNewTransaction();
  return (
    <S.Container>
      <HeaderNewTransaction
        onPress={setTransactionType}
        transactionType={transactionType}
      />
      <S.Content>
        <S.TitlePage>{transactionType}</S.TitlePage>
      </S.Content>
    </S.Container>
  );
};

export default NewTransaction;
