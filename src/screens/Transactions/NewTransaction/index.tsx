import React from "react";
import DatePicker from "react-native-date-picker";
import * as MiniIcons from "react-native-heroicons/mini";
import { PencilIcon } from "react-native-heroicons/solid";
import Button from "../../../components/Button";
import CategoryIcon from "../../../components/CategoryIcons";
import InputTransactionForm from "../../../components/InputTransactionForm";
import ItemCategory from "../../../components/ItemCategory";
import { darkTheme } from "../../../theme/colors";
import { NewTransactionProps } from "../../../types/navigation";
import { HeaderNewTransaction } from "./components/HeaderNewTransaction";
import * as S from "./styles";
import { useNewTransaction } from "./viewModel";

const NewTransaction = (props: NewTransactionProps) => {
  const {
    transactionType,
    setTransactionType,
    transactionAmount,
    setTransactionName,
    transactionName,
    onChangeTransactionAmount,
    category,
    handleSetAccount,
    handleSetCategory,
    open,
    viewDate,
    onCancel,
    onConfirm,
    handleSetDate,
    transactionDate,
    fixedOrInstallTransaction,
    handleFixedOrInstallTransaction,
    handleAddTransaction,
  } = useNewTransaction(props);

  return (
    <S.Container>
      <HeaderNewTransaction
        onPress={setTransactionType}
        transactionType={transactionType}
      />
      <S.Content>
        <S.TitlePage>
          Valor da {transactionType === "income" ? "receita" : "despesa"}
        </S.TitlePage>
        <S.BoxBalanceInput>
          <S.CurrencyText>R$</S.CurrencyText>
          <S.BalanceLabel
            value={transactionAmount}
            onChangeValue={onChangeTransactionAmount}
            returnKeyType="done"
            autoFocus
          />
          <PencilIcon height={48} size={20} color={darkTheme.grey_500} />
        </S.BoxBalanceInput>
        <InputTransactionForm
          value={transactionName}
          onChangeText={setTransactionName}
          label="Descrição"
          placeholder={
            transactionType === "income" ? "Remuneração" : "Produtos de Limpeza"
          }
        />
        <S.LabelInputText>Categoria</S.LabelInputText>
        <ItemCategory category={category} onPress={handleSetCategory} />
        <S.LabelInputText>
          {transactionType === "income" ? "Recebido em" : `Pago com`}
        </S.LabelInputText>
        <S.BoxInput onPress={handleSetAccount}>
          <CategoryIcon category="salary" />
          <S.CategoryText>Carteira</S.CategoryText>
        </S.BoxInput>
        <S.LabelInputText>Data</S.LabelInputText>
        <S.BoxInput onPress={handleSetDate}>
          <MiniIcons.CalendarDaysIcon color={"#999999"} />
          <S.CategoryText>{viewDate}</S.CategoryText>
        </S.BoxInput>
        <S.LabelInputText>Repetir lançamento</S.LabelInputText>
        <S.BoxLoop>
          <S.BoxLoopTransaction
            active={fixedOrInstallTransaction === "fixed"}
            onPress={() => handleFixedOrInstallTransaction("fixed")}
          >
            <S.LoopText active={fixedOrInstallTransaction === "fixed"}>
              Fixo
            </S.LoopText>
          </S.BoxLoopTransaction>
          <S.BoxLoopTransaction
            active={fixedOrInstallTransaction === "installments"}
            onPress={() => handleFixedOrInstallTransaction("installments")}
          >
            <S.LoopText active={fixedOrInstallTransaction === "installments"}>
              Parcelado
            </S.LoopText>
          </S.BoxLoopTransaction>
        </S.BoxLoop>
        <Button
          disabled={transactionName.length === 0 || transactionAmount === 0}
          onPress={handleAddTransaction}
          text="Adicionar"
        />
      </S.Content>
      <DatePicker
        modal
        mode="date"
        open={open}
        date={transactionDate}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </S.Container>
  );
};

export default NewTransaction;
