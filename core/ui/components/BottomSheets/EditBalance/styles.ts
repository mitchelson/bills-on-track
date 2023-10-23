import CurrencyInput from 'react-native-currency-input';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 16px;
  width: 100%;
`;

export const TitleLabel = styled.Text`
  font-size: 25px;
  margin: 10px;
  text-align: center;
  font-weight: 600;
  color: ${props => props.theme.title};
`;

export const BoxInput = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  background: ${props => props.theme.grey_100};
  margin-top: 15px;
`;

export const CurrencyLabel = styled.Text`
  font-size: 20px;
  margin-right: 20px;
  color: ${props => props.theme.title};
`;

export const BalanceLabel = styled(CurrencyInput)`
  font-size:30px;
  font-weight: 600;
  flex: 1;
  color: ${props => props.theme.title};
`;

type WarningBalanceProps = {
  diffCurrentBalance: "positive" | "negative" | ""
}

export const WarningBalance = styled.Text<WarningBalanceProps>`
  font-size: 16px;
  margin: 2px 0px;
  margin-top: 10px;
  color: ${({ theme, diffCurrentBalance }) =>
    diffCurrentBalance === "positive" ?
      theme.greenColor
      : diffCurrentBalance === "negative"
        ? theme.danger : "white"
  };
  text-align: center;
`;

export const FriendlyMessage = styled.Text`
  font-size: 20px;
  margin: 2px 0px;
  text-align: center;
  margin-top: 10px;
  color: ${({ theme }) => theme.title}
`;
