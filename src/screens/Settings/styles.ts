import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex:1;
`;

export const Content = styled.ScrollView`
  padding: 16px;
`;

export const TitlePage = styled.Text`
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
  height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.danger};
  margin: 16px;
`;