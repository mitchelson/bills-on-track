import CurrencyInput from "react-native-currency-input";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Content = styled.ScrollView`
  padding: 16px;
`;

export const TitlePage = styled.Text`
  font-size: 15px;
  margin: 16px 0 8px 0;
  font-weight: 300;
  color: ${({ theme }) => theme.title};
  text-align: center;
`;

export const CurrencyText = styled.Text`
  font-size: 15px;
  font-weight: 300;
  color: ${({ theme }) => theme.title};
  text-align: center;
  margin-bottom: 8px;
  margin-right: -8px;
`;

export const LabelInputText = styled.Text`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.title};
  margin: 16px 0 8px 0;
`;

export const BoxBalanceInput = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: flex-end;
  justify-content: center;
`;

export const BoxInput = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  align-items: center;
  border-bottom-width: 1px;
  padding-bottom: 16px;
  border-color: ${({ theme }) => theme.grey_100};
`;

export const CategoryText = styled.Text`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  margin-left: 8px;
  color: ${props => props.theme.text_300};
`;

export const BalanceLabel = styled(CurrencyInput)`
  font-size:30px;
  font-weight: 600;
  height: 48px;
  padding: 0 20px;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: ${props => props.theme.title};
`;

export const BoxLoop = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

interface BoxLoopTransactionProps {
  active: boolean
}

export const BoxLoopTransaction = styled.TouchableOpacity<BoxLoopTransactionProps>`
  padding: 5px 14px;
  border-radius: 20px;
  margin-right: 10px;
  background-color: ${({ theme, active }) => active ? theme.green_500 : theme.grey_200};
`;


export const LoopText = styled.Text<BoxLoopTransactionProps>`
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: ${({ theme, active }) => active ? theme.white : theme.text_300};
`;
