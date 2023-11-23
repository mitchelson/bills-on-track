import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.ScrollView`
  padding: 16px;
`;

export const Box = styled.View``;
export const General = styled.View``;
export const Security = styled.View``;

export const TextTitle = styled.Text`
  font-size: 14px;
  font-weight: 400;
  margin-left: 10px;
  color: ${({ theme }) => theme.title};
`;

export const TitlePage = styled.Text`
  font-size: 14px;
  padding: 10px 0px;
  font-weight: 700;
  color: ${({ theme }) => theme.title};
`;

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.title};
  font-size: 20px;
  font-weight: 400;
`;

export const Row = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const BoxIcons = styled.View`
  background-color: #16c64f;
  border-radius: 8px;
  width: 32px;
  height: 32px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 10px;
  margin: 16px 0;
`;
