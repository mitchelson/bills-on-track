import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  width: 100%;
  flex: 1;
  padding: 16px;
  background-color: ${({ theme }) => theme.background};
`;

export const Content = styled.ScrollView`
  padding: 16px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.title};
  font-size: 16px;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.title};
  font-size: 25px;
  font-weight: bold;
`;

export const BoxBalance = styled.View`
  justify-content: center;
  padding: 20px;
  width: 100%;
  padding: 20px;
  border: 1px;
  border-radius: 10px;
  border-color: ${({ theme }) => theme.grey100};
  margin-top: 20px;
  background-color: ${({ theme }) => theme.black};
`;

export const TitleBalance = styled.Text`
  color: ${({ theme }) => theme.title};
  font-size: 16px;
`;

export const Balance = styled.Text`
  color: ${({ theme }) => theme.title};
  font-size: 50px;
  font-weight: bold;
`;

export const BalanceCents = styled.Text`
  color: ${({ theme }) => theme.title};
  font-size: 30px;
  font-weight: normal;
`;

export const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-right: 10px;
`;

export const Row = styled.View`
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`;

export const Box = styled.View``;
