import React from "react";
import { calcBalance, currencyView } from "../../../../src/common";
import { MonthlyFinanceProps } from "../../../../src/types";
import * as S from "./styles";
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
const MonthlyFinanceBox: React.FC<MonthlyFinanceProps> = (props) => {
  return (
    <S.Container>
      <S.BoxBalance>
        <View
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            alignItems: "center",
          }}
        >
          <S.TitleBalance>Saldo de {props.month}</S.TitleBalance>
          <S.Row>
            <S.BoxMoney>
              <S.Balance>{calcBalance(props.expectedRevenue)}</S.Balance>
            </S.BoxMoney>
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
                  {currencyView(props.expectedRevenue)}
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
                  R${currencyView(props.monthlyExpenses)}
                </S.AnticipatedValue>
              </S.BoxMoney>
            </View>
          </S.Row>
        </S.Row>
      </S.BoxBalance>
    </S.Container>
  );
};

export default MonthlyFinanceBox;
