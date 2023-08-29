import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.ScrollView`
  padding: 16px;
`;

export const TitlePage = styled.Text`
  font-size: 20px;
  font-weight: 300;
  color: ${({ theme }) => theme.title};
  text-align: center;
`;
