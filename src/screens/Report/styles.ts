import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.green_500};
`;

export const FlatList = styled.FlatList`
  background-color: ${({ theme }) => theme.white};
  margin-top: -30px;
  padding: 50px 16px 0px 16px;
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.green_500};
  padding: 16px;
  align-items: center;
  border-bottom-right-radius: 24px;
  border-bottom-left-radius: 24px;
  z-index: 100;
`;

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
`;

export const TitlePage = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: ${({ theme }) => theme.white};
`;

export const YearReport = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.white};
`;

export const TotalOutcome = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin: 20px 0;
  color: ${({ theme }) => theme.white};
`;


export const Text = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.title};
`;
