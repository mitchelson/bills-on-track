import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
width: 100%;
height: 100%;
padding:16px;
`;

export const Content = styled.ScrollView`
  padding: 16px;
`;
export const Box = styled.View`
`;
export const General = styled.View`
`;
export const Security = styled.View`

`;
export const TextTitle = styled.Text``;

export const TitlePage = styled.Text`
padding: 0px 16px;
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme }) => theme.title};
`;

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.title};
  font-size: 20px;
  font-weight: 400;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 10px;
  margin: 16px;
`;
