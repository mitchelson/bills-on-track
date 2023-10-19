import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  padding: 8px 0;
  border-bottom-width: 1px;
  border-color: #EEEEEE;
  align-items: center;
`;

export const BoxText = styled.View`
  flex: 1;
  margin-left: 10px;
  justify-content: space-between;
`;

export const TransactionName = styled.Text`
  color: ${({ theme }) => theme.title};
`;

export const AccountName = styled.Text`
  color: ${({ theme }) => theme.grey_300};
`;

type TransactionValueProps = {
  type: "outcome" | "income"
}

export const TransactionValue = styled.Text<TransactionValueProps>`
  color: ${({ type }) => type === "income" ? '#17C64F' : '#F44236'};
  font-size: 20px;
  font-weight: 500;
`;
