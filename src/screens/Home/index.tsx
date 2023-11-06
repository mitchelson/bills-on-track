import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import {
  ArrowUpCircleIcon,
  ArrowDownCircleIcon,
} from "react-native-heroicons/solid";
import MonthlyFinanceBox from "../../../core/ui/components/MonthlyFinanceBox";
import NewTransactionButton from "../../../core/ui/components/NewTransactionButton";
import { calcBalance } from "../../common";
import * as S from "./styles";
import { useHomeView } from "./viewModel";
import { View } from "react-native";
import { GeneralAccount } from "../../../core/ui/components/GeneralAccount";

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
      <S.Header>
        <S.BoxAvatar>
          <S.BoxIcon>
            <Ionicons size={15} color="#16C64F" name="person" />
          </S.BoxIcon>
          <S.Avatar source={{ uri: user?.picture }} />
        </S.BoxAvatar>
        <S.Box>
          <S.Title>Bem Vindo,</S.Title>
          <S.Name>{user?.given_name}</S.Name>
        </S.Box>
      </S.Header>
      <S.Content>
        <MonthlyFinanceBox
          expectedBalance={expected}
          monthlyExpenses={expenses}
          expectedRevenue={revenue}
          month={month}
        />
        <GeneralAccount/>
      </S.Content>
      <NewTransactionButton />
    </S.Container>
  );
};

export default Home;
