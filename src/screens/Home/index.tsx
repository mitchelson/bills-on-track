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
        <S.BoxBalance>
          <View
            style={{
              paddingTop: 10,
              paddingBottom: 30,
              alignItems: "center",
            }}
          >
            <S.TitleBalance>Balanço de Novembro</S.TitleBalance>
            <S.Row>
              <S.BoxMoney>
                <S.Balance>R${calcBalance(balance).split("R$")[1]}</S.Balance>
              </S.BoxMoney>
              {/* <TouchableOpacity onPress={editBalance}>
              <PencilIcon />
            </TouchableOpacity> */}
            </S.Row>
          </View>

          <S.Row style={{ justifyContent: "space-between" }}>
            <S.Row
              style={{
                justifyContent: "space-around",
              }}
            >
              <View
                style={{
                  backgroundColor: "#17C64F",
                  borderRadius: 18,
                  width: 36,
                  height: 36,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MaterialIcons
                  style={{
                    marginTop: 0.3,
                    marginLeft: 0.7,
                  }}
                  name="arrow-circle-up"
                  color={"#fff"}
                  size={27}
                />
              </View>
              <View
                style={{
                  paddingHorizontal: 10,
                  height: 40,
                  justifyContent: "space-evenly",
                  flexDirection: "column",
                }}
              >
                <S.TitleValue>Receita prevista</S.TitleValue>
                <S.BoxMoney>
                  <S.AnticipatedValue>
                    R${calcBalance(balance).split("R$")[1]}{" "}
                  </S.AnticipatedValue>
                </S.BoxMoney>
              </View>
            </S.Row>

            <S.Row>
              <View
                style={{
                  backgroundColor: "#F75453",
                  borderRadius: 18,
                  width: 36,
                  height: 36,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MaterialIcons
                  style={{
                    marginTop: 0.3,
                    marginLeft: 0.7,
                  }}
                  name="arrow-circle-down"
                  color={"#fff"}
                  size={27}
                />
              </View>
              <View
                style={{
                  height: 40,
                  paddingHorizontal: 10,
                  justifyContent: "space-evenly",
                  flexDirection: "column",
                }}
              >
                <S.TitleValue>Gastos previstos</S.TitleValue>
                <S.BoxMoney>
                  <S.AnticipatedValue>
                    R${calcBalance(balance).split("R$")[1]}{" "}
                  </S.AnticipatedValue>
                </S.BoxMoney>
              </View>
            </S.Row>
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
