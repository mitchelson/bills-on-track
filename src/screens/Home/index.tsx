import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { PencilIcon } from "react-native-heroicons/solid";
import MonthlyFinanceBox from "../../../core/ui/components/MonthlyFinanceBox";
import NewTransactionButton from "../../../core/ui/components/NewTransactionButton";
import { calcBalance } from "../../common";
import * as S from "./styles";
import { useHomeView } from "./viewModel";

const Home = () => {
  const {
    user,
    balance,
    month,
    revenue,
    expected,
    expenses,
    loadTransactions,
    editBalance,
  } = useHomeView();

  return (
    <S.Container>
      <S.Content>
        <S.Row>
          <S.Row>
            <S.Avatar source={{ uri: user?.picture }} />
            <S.Box>
              <S.Title>Bem Vindo</S.Title>
              <S.Name>{user?.given_name}</S.Name>
            </S.Box>
          </S.Row>
          <S.Notification>
            <Ionicons name="notifications-outline" size={32} color="white" />
          </S.Notification>
        </S.Row>

        <S.BoxBalance>
          <S.TitleBalance>Balanço total</S.TitleBalance>
          <S.Row>
            <S.BoxMoney>
              <S.BalanceCents>R$</S.BalanceCents>
              <S.Balance>{calcBalance(balance).split("R$")[1]}</S.Balance>
            </S.BoxMoney>
            <TouchableOpacity onPress={editBalance}>
              <PencilIcon />
            </TouchableOpacity>
          </S.Row>
        </S.BoxBalance>

        <MonthlyFinanceBox
          expectedBalance={expected}
          monthlyExpenses={expenses}
          expectedRevenue={revenue}
          month={month}
        />
      </S.Content>
      <NewTransactionButton />
    </S.Container>
  );
};

export default Home;
